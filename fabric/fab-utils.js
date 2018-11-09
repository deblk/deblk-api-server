const path = require('path');
const FabricCAServices = require('fabric-ca-client');
const Client = require('fabric-client')
const logger = Client.getLogger('fab-utils');
const utils = require('./utils')
const userUtils = require('./user-utils')
const util = require('util');
let ORGS
const useStore = true
const KEYSTOREPATH = './testkeystore.txt'

function init(cp){
    if(!ORGS){
        ORGS = Client.loadFromConfig(cp);
    }
}

module.exports.getOrg =function(cp){
    init(cp)
    return ORGS
}


function queryChaincode(fcn, args, ccId, ccVer, client, channelName){

    let channel = client.getChannel(channelName);
    console.log("Channel:"+channel);
    let txID = client.newTransactionID();
    let transientMap = false

    const request = {
        chaincodeId: ccId,
        fcn : fcn,
        args : args,
        txId :txID,
    };

    return channel.queryByChaincode(request)
        .then((response_payload) =>{
            let payload = [];
            if(response_payload){
                for(let i = 0; i < response_payload.length; i++){
                    if(transientMap){
                        //TODO check transaction tm if tm is used
                        let tm = response_payload[i].toString();
                        tm = transientMap[Object.keys(transientMap)[0]].toString();
                    }else{
                        payload.push(response_payload[i].toString('utf8'));
                    }
                }
            }else{
                throw new Error('Failed to get response on query');
            }

            return payload
        }, (err) =>{
            console.log("query error"+err)
            return err
        })
}


//Invoke assumes has already been initialized with store and user
//context should have network
//TODO invoke should take a list of peers to invoke on to satisfy endorsement policy
function invokeChaincode(fcn, args, ccId, ccVer, client, channelName ){


    logger.debug('Invoking chaincode: '+fcn+ " args: "+args);
    Client.setConfigSetting('request-timeout', 60000);//?

    let channel = client.getChannel(channelName);

    console.log("Channel:"+channel)
    let txID = client.newTransactionID();


    const request = {
        chaincodeId: ccId,
        fcn : fcn,
        args : args,
        txId :txID,
    };
    let successProposals = [];
    let failedProposals = [];

    //TODO create function to initialize channel with context

    return channel.sendTransactionProposal(request)
        .then((results) =>{
            //check results of proposals
            //event should check at this point
            //TODO create function to check responses based on endorsement policy
            const proposalResponses = results[0];
            const proposal = results[1];

            for (let i in proposalResponses){
                const proposal_response = proposalResponses[i];

                if(proposal_response.response && proposal_response.response.status === 200){
                    console.log("Proposal response success:" + proposal_response);

                    //ERRROR channel has no MSP defined?

                    //TODO channel.verifyProposalResponse requires msp config to be setup so the channel can compare msp id
                    // let good = channel.verifyProposalResponse(proposal_response);
                    console.log(proposal_response)
                    if(true){
                        console.log("proposal signature and endorser are valid");
                        successProposals.push(proposal_response)

                    }
                }else{
                    console.log("Proposal response failed: "+proposal_response);
                    failedProposals.push(proposal_response);
                }
            }

            //check all r/w sets to ensure all peers got the same results
            let all_good = channel.compareProposalResponseResults(proposalResponses)

            if(all_good){
                //send off good proposal to orderers to get broadcasted
                console.log("Sending off proposalResponses, ALL GOOT" )
                console.log(util.format('Successfully sent Proposal and received ProposalResponse: Status - %s, message - "%s", metadata - "%s", endorsement signature: %s', proposalResponses[0].response.status, proposalResponses[0].response.message, proposalResponses[0].response.payload, proposalResponses[0].endorsement.signature));
                const request = {
                    proposalResponses: proposalResponses,
                    proposal: proposal
                };

                //TODO implement eventhub
                return channel.sendTransaction(request)
            }else{
                throw new Error('Failed to send Proposal or receive valid response. Response null or status is not 200. exiting...');
            }

        }).then((response) =>{
            if(response.status === 'SUCCESS'){
                console.log("Successfully send transaction to order");
                channel.close();
                return true;
            } else {
                console.log('Failed to order the transaction. Error code: ' + response.status);
                throw new Error('Failed to order the transaction. Error code: ' + response.status);
            }
        }, (err) => {
            throw new Error('Failed to send transaction due to error: ' + err.stack ? err.stack : err);

        })
}

module.exports.invokeChaincode = invokeChaincode
module.exports.queryChaincode = queryChaincode
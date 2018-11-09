

const userUtil = require('./user-utils')
const fabUtil = require('./fab-utils')
const cp = "./cp.json"
const utils = require('./utils')
const Client = require('fabric-client')
const NetworkConfig = require('fabric-client/lib/impl/NetworkConfig_1_0.js');

let ORGS = fabUtil.getOrg(cp)


let client = Client.loadFromConfig(cp)
const staticUser = 'huyaddsssdmin'

const args = ['a','b','1000'];
const fcn = 'invoke'
const queryArg = ["a"]
const fcnQuery = 'query'

// To create new user and get the user
client.initCredentialStores()
    .then(() =>{
        return userUtil.createUser(client, staticUser, 'lkjsssdddddddddasd')
    })
    .then((newUser) =>{
        console.log("New User!");
        console.log(newUser);
        console.log(newUser.getName());
        return userUtil.getUser(newUser.getName(), client)
    }).catch((err) =>{
        console.log("Register user fail "+err)
        return err
    }).then((user) =>{
        console.log(user)
        if(user.getName() === staticUser){
            console.log(user)
            console.log('works')
        }
        return client.setUserContext(user)
})
    .then((user) =>{
    return fabUtil.invokeChaincode(fcn, args,'defaultcc', 'v1', client, 'foo' )
}).catch((err) =>{
    console.log("Invoke error :"+err)
})


//INVOKE example
// client.initCredentialStores()
// .then(()=>{
//     return userUtil.getUser(staticUser, client)
// }).then((user) =>{
//     return client.setUserContext(user)
// }).then((user) =>{
//     return fabUtil.invokeChaincode(fcn, args, 'defaultcc', 'v1', client, 'foo')
// }).catch((err) =>{
//     console.log("Invoke error : "+err)
// })

// //QUERY EXAMPLE
// client.initCredentialStores()
// .then(() =>{
//     return userUtil.getUser(staticUser, client)
// }).then((user) =>{
//     return client.setUserContext(user)
// }).then((user) =>{
//     return fabUtil.queryChaincode(fcnQuery, queryArg, 'defaultcc', 'v1', client, 'foo')
// }).then((payload) =>{
//     console.log("Results:")
//     console.log(payload)
// })
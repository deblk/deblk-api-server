require('dotenv').config()
const User = require('fabric-client/lib/User.js');
const utils = require('./utils.js')
const Client = require('fabric-client')
const logger = Client.getLogger('./user-utils');
const admin = process.env.CA_ADMIN
const adminpw = process.env.CA_PW

let ca;
function initCA(ORGS){
    logger.debug(ORGS)
    ca = {
        url : ORGS.ca.url,
        name: ORGS.ca.name
    }
}

function getUser(username, client){
    return client.getUserContext(username, true)
        .then((user) =>{
            return user
        })
}


function makeUser(username,password){
    return {username: username, password: password}
}

function getRegisterRequest(username, password){
    let roles = ['client'];
    let affiliation = "org1.department1";
    return {
        enrollmentID: username,
        enrollmentSecret : password,
        roles: roles,
        affiliation: affiliation
    };
}

module.exports.getRegisterRequest = getRegisterRequest;

function getCACred(){
    return {
        username: admin,
        password: adminpw,
    };
}

module.exports.getCACred = getCACred;

//Able to create user and store user in store
//Requires a client that has store initialized
function createUser(client, username, password){
    //TODO get admin user from env
    const newMember = new User(username)

    let copService = client.getCertificateAuthority();
    let admin = {
        username: 'admin',
        password: 'adminpw',
    }

    return client.setUserContext(admin)
        .then((adminUser) =>{
            console.log('Admin user: '+adminUser)
            return copService.register(getRegisterRequest(username, password), adminUser)
        }).then((secret) =>{
            let enrollReq = {
                enrollmentID: username,
                enrollmentSecret : secret
            }
            newMember._enrollmentSecret = secret;
            return copService.enroll(enrollReq)
        }).then((enrollment) =>{
            newMember.setRoles(roles);
            newMember.setAffiliation(affiliation);
            return newMember.setEnrollment(enrollment.key, enrollment.certificate, client.getMspid())
        }).then((() =>{
            console.log("created user :"+newMember)
            return client.setUserContext(newMember, false)
        })).catch((err) =>{
            console.log("Failed to create user!")
            console.log(err)
            return err
        })
}



module.exports.makeUser = makeUser
module.exports.createUser = createUser
module.exports.getUser = getUser

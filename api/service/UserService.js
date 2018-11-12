'use strict';
const userUtil = require('./../../fabric/user-utils');
const CLIENT = require('fabric-client');
const util = require('./../../fabric/utils');
/**
 * Register and enroll a user to the fabric network
 *
 * data User Model instance data
 * returns User
 **/
exports.createUser = function(data) {
  return new Promise(function(resolve, reject) {

    let client = util.getClient();

    client.initCredentialStores()
        .then(() =>{
            console.log("Creating user");
            return userUtil.createUser(client, data.username, data.secret)
        }).then((newUser) =>{
            console.log('Successfully created user '+ newUser.getName())
            resolve(newUser);
    }).catch((err) =>{
        reject(err);
    });
    //
    //
    // if (Object.keys(examples).length > 0) {
    //   resolve(examples[Object.keys(examples)[0]]);
    // } else {
    //   resolve();
    // }
  });
}


'use strict';
const userUtil = require('./../../fabric/user-utils');

/**
 * Register and enroll a user to the fabric network
 *
 * data User Model instance data
 * returns User
 **/
exports.createUser = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "secret" : "secret",
  "username" : "username"
};
    console.log("Creating user");
    console.log(data)
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


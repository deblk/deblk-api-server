'use strict';
const util = require('./../../fabric/utils');
const fabUtil = require('./../../fabric/fab-utils');
const userUtil = require('./../../fabric/user-utils');
const Enum = require('enum');
const FUNC = new Enum({

});

/**
 * Get transaction by id
 *
 * id String Transaction id
 * returns EnergyTokenTransaction
 **/
exports.findTransactionById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tokenInc" : "tokenInc",
  "energyInc" : "energyInc",
  "rate" : 0.8008281904610115,
  "energyDec" : "energyDec",
  "value" : 6.027456183070403,
  "tokenDec" : "tokenDec",
  "transactionId" : "transactionId",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all transactions
 *
 * returns List
 **/
exports.getAllTransactions = function() {
    return new Promise(function(resolve, reject) {
        var examples = {};
        examples['application/json'] = [ {
            "status" : "firstName",
            "timestamp" : "lastName",
            "alias" : "alias",
            "address" : "tokens",
            "id" : "sha256",
            "username" : "Prosumer",
            "state" : "cash",
            "transactionId" : "energy"
        }, {
            "status" : "firstName",
            "timestamp" : "lastName",
            "alias" : "alias",
            "address" : "tokens",
            "id" : "sha256",
            "username" : "Prosumer",
            "state" : "cash",
            "transactionId" : "energy"
        } ];
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


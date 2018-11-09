'use strict';


/**
 * Transaction of cash and token between 2 participants
 *
 * data CashTokenTransaction CashTokenTransaction object
 * returns CashTokenTransaction
 **/
exports.cashTokenTransaction = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tokenInc" : "tokenInc",
  "cashInc" : "cashInc",
  "cashDec" : "cashDec",
  "value" : 0.8008281904610115,
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
 * Get all cashtoken transactions
 *
 * returns List
 **/
exports.getAllCashTokenTransaction = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tokenInc" : "tokenInc",
  "cashInc" : "cashInc",
  "cashDec" : "cashDec",
  "value" : 0.8008281904610115,
  "tokenDec" : "tokenDec",
  "transactionId" : "transactionId",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
}, {
  "tokenInc" : "tokenInc",
  "cashInc" : "cashInc",
  "cashDec" : "cashDec",
  "value" : 0.8008281904610115,
  "tokenDec" : "tokenDec",
  "transactionId" : "transactionId",
  "timestamp" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


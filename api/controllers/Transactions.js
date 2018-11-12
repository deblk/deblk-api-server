'use strict';

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.findTransactionById = function findTransactionById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Transactions.findTransactionById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllTransactions = function getAllTransactions (req, res, next) {
    Transactions.getAllTransactions()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


function mapper(payload){
    return {
        status : payload,
        timestamp: payload,
        alias: payload,
        address: payload,
        username: payload,
        state: payload,
        transactionId: payload

    }
}
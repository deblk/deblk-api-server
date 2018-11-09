'use strict';

var utils = require('../utils/writer.js');
var CashTokenTransaction = require('../service/CashTokenTransactionService');

module.exports.cashTokenTransaction = function cashTokenTransaction (req, res, next) {
  var data = req.swagger.params['data'].value;
  CashTokenTransaction.cashTokenTransaction(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCashTokenTransaction = function getAllCashTokenTransaction (req, res, next) {
  CashTokenTransaction.getAllCashTokenTransaction()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

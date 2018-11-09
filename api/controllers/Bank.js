'use strict';

var utils = require('../utils/writer.js');
var Bank = require('../service/BankService');

module.exports.createBank = function createBank (req, res, next) {
  var data = req.swagger.params['data'].value;
  Bank.createBank(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBank = function deleteBank (req, res, next) {
  var id = req.swagger.params['id'].value;
  Bank.deleteBank(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findBankById = function findBankById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Bank.findBankById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllBanks = function getAllBanks (req, res, next) {
  Bank.getAllBanks()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBank = function updateBank (req, res, next) {
  var id = req.swagger.params['id'].value;
  var data = req.swagger.params['data'].value;
  Bank.updateBank(id,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

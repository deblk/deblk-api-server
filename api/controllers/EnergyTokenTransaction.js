'use strict';

var utils = require('../utils/writer.js');
var EnergyTokenTransaction = require('../service/EnergyTokenTransactionService');

module.exports.energyTokenTransaction = function energyTokenTransaction (req, res, next) {
  var data = req.swagger.params['data'].value;
  EnergyTokenTransaction.energyTokenTransaction(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllEnergyTokenTransaction = function getAllEnergyTokenTransaction (req, res, next) {
  EnergyTokenTransaction.getAllEnergyTokenTransaction()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


function mapper(payload){
    return {
        id : payload.id,

    }
}
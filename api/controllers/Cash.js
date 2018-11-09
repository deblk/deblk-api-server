'use strict';

var utils = require('../utils/writer.js');
var Cash = require('../service/CashService');

module.exports.createCash = function createCash (req, res, next) {
  var data = req.swagger.params['data'].value;
  Cash.createCash(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCash = function deleteCash (req, res, next) {
  var id = req.swagger.params['id'].value;
  Cash.deleteCash(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCash = function getAllCash (req, res, next) {
  Cash.getAllCash()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCashById = function getCashById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Cash.getCashById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCash = function updateCash (req, res, next) {
  var id = req.swagger.params['id'].value;
  var data = req.swagger.params['data'].value;
  Cash.updateCash(id,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

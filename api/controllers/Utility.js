'use strict';

var utils = require('../utils/writer.js');
var Utility = require('../service/UtilityService');

module.exports.createUtility = function createUtility (req, res, next) {
  var data = req.swagger.params['data'].value;
  Utility.createUtility(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUtility = function deleteUtility (req, res, next) {
  var id = req.swagger.params['id'].value;
  Utility.deleteUtility(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findUtilityById = function findUtilityById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Utility.findUtilityById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllUtilities = function getAllUtilities (req, res, next) {
  Utility.getAllUtilities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUtility = function updateUtility (req, res, next) {
  var id = req.swagger.params['id'].value;
  var data = req.swagger.params['data'].value;
  Utility.updateUtility(id,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

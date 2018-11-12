'use strict';

var utils = require('../utils/writer.js');
var Resident = require('../service/ResidentService');

module.exports.createResident = function createResident (req, res, next) {
  var data = req.swagger.params['data'].value;
  Resident.createResident(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteResidentById = function deleteResidentById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Resident.deleteResidentById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findResidentById = function findResidentById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Resident.findResidentById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllResidents = function getAllResidents (req, res, next) {
  Resident.getAllResidents()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateResident = function updateResident (req, res, next) {
  var id = req.swagger.params['id'].value;
  var data = req.swagger.params['data'].value;
  Resident.updateResident(id,data)
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
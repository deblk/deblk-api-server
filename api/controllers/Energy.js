'use strict';

var utils = require('../utils/writer.js');
var Energy = require('../service/EnergyService');

module.exports.createEnergy = function createEnergy (req, res, next) {
  var data = req.swagger.params['data'].value;
  Energy.createEnergy(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEnergy = function deleteEnergy (req, res, next) {
  var id = req.swagger.params['id'].value;
  Energy.deleteEnergy(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllEnergy = function getAllEnergy (req, res, next) {
  Energy.getAllEnergy()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEnergyById = function getEnergyById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Energy.getEnergyById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEnergy = function updateEnergy (req, res, next) {
  var id = req.swagger.params['id'].value;
  var data = req.swagger.params['data'].value;
  Energy.updateEnergy(id,data)
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
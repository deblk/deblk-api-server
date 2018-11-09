'use strict';

var utils = require('../utils/writer.js');
var Token = require('../service/TokenService');

module.exports.createToken = function createToken (req, res, next) {
  var data = req.swagger.params['data'].value;
  Token.createToken(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteToken = function deleteToken (req, res, next) {
  var id = req.swagger.params['id'].value;
  Token.deleteToken(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findTokenById = function findTokenById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Token.findTokenById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllTokens = function getAllTokens (req, res, next) {
  Token.getAllTokens()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateToken = function updateToken (req, res, next) {
  var id = req.swagger.params['id'].value;
  var data = req.swagger.params['data'].value;
  Token.updateToken(id,data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

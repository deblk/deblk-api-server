'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');


module.exports.createUser = function createUser (req, res, next) {
  var data = req.swagger.params['data'].value;
  User.createUser(data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');


module.exports.createUser = function createUser (req, res, next) {
  var data = req.swagger.params['data'].value;
  User.createUser(data)
    .then(function (response) {
      console.log('response from createUser : '+response);

      utils.writeJson(res, mapper(response), 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


//Mapper functions maps the response from services to Objects we are contracted to return
function mapper(payload){
    console.log("returning payload: "+payload);
    return {
        username: payload._name,
        secret: payload._enrollmentSecret
    };
}
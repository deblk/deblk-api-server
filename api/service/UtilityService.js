'use strict';
const util = require('./../../fabric/utils');
const fabUtil = require('./../../fabric/fab-utils');
const userUtil = require('./../../fabric/user-utils');
const Enum = require('enum');
const FUNC = new Enum({

});

/**
 * Create a new Utility
 *
 * data Utility Utility object
 * returns Utility
 **/
exports.createUtility = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "energy" : "energy"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Utility
 *
 * id String Utility's ID
 * returns Object
 **/
exports.deleteUtility = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Utility by id
 *
 * id String Utility id
 * returns Utility
 **/
exports.findUtilityById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "energy" : "energy"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all Utilities
 *
 * returns List
 **/
exports.getAllUtilities = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "energy" : "energy"
}, {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "energy" : "energy"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Utility
 *
 * id String Utility id
 * data Utility Utility object
 * returns Utility
 **/
exports.updateUtility = function(id,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "energy" : "energy"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


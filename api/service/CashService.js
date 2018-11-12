'use strict';
const util = require('./../../fabric/utils');
const fabUtil = require('./../../fabric/fab-utils');
const userUtil = require('./../../fabric/user-utils');
const Enum = require('enum');
const FUNC = new Enum({

});

/**
 * Create a new cash asset
 *
 * data Cash Model instance data
 * returns Cash
 **/
exports.createCash = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "ownerType" : "Resident",
  "currency" : "USD",
  "id" : "id",
  "value" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete cash by id
 *
 * id String Cash id
 * returns Object
 **/
exports.deleteCash = function(id) {
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
 * Get all cash assets
 *
 * returns List
 **/
exports.getAllCash = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : "owner",
  "ownerType" : "Resident",
  "currency" : "USD",
  "id" : "id",
  "value" : 0.8008281904610115
}, {
  "owner" : "owner",
  "ownerType" : "Resident",
  "currency" : "USD",
  "id" : "id",
  "value" : 0.8008281904610115
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find cash asset by id
 *
 * id String Cash id
 * returns Cash
 **/
exports.getCashById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "ownerType" : "Resident",
  "currency" : "USD",
  "id" : "id",
  "value" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update cash asset
 *
 * id String Cash id
 * data Cash Cash object
 * returns Cash
 **/
exports.updateCash = function(id,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "ownerType" : "Resident",
  "currency" : "USD",
  "id" : "id",
  "value" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


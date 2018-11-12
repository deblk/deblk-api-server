'use strict';
const util = require('./../../fabric/utils');
const fabUtil = require('./../../fabric/fab-utils');
const userUtil = require('./../../fabric/user-utils');
const Enum = require('enum');
const FUNC = new Enum({

});

/**
 * Create a new Energy Asset
 *
 * data Energy Energy object
 * returns Energy
 **/
exports.createEnergy = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "ownerType" : "Resident",
  "id" : "id",
  "units" : "kWh",
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
 * Delete energy Asset
 *
 * id String Energy id
 * returns Object
 **/
exports.deleteEnergy = function(id) {
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
 * Get all energy assets
 *
 * returns List
 **/
exports.getAllEnergy = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : "owner",
  "ownerType" : "Resident",
  "id" : "id",
  "units" : "kWh",
  "value" : 0.8008281904610115
}, {
  "owner" : "owner",
  "ownerType" : "Resident",
  "id" : "id",
  "units" : "kWh",
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
 * Find energy asset by id
 *
 * id String Energy id
 * returns Energy
 **/
exports.getEnergyById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "ownerType" : "Resident",
  "id" : "id",
  "units" : "kWh",
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
 * Update energy Asset
 *
 * id String Energy id
 * data Energy Energy object
 * returns Energy
 **/
exports.updateEnergy = function(id,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "ownerType" : "Resident",
  "id" : "id",
  "units" : "kWh",
  "value" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


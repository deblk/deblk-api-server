'use strict';


/**
 * Create a new instance of the model and persist it into the data source.
 *
 * data Resident Model instance data
 * returns Resident
 **/
exports.createResident = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "alias" : "alias",
  "tokens" : "tokens",
  "id" : "sha256",
  "type" : "Prosumer",
  "cash" : "cash",
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
 * Delete resident by ID
 *
 * id String Model id
 * returns Object
 **/
exports.deleteResidentById = function(id) {
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
 * Find a resident by id
 *
 * id String Resident's ID
 * returns Resident
 **/
exports.findResidentById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "alias" : "alias",
  "tokens" : "tokens",
  "id" : "sha256",
  "type" : "Prosumer",
  "cash" : "cash",
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
 * Get all residents
 *
 * returns List
 **/
exports.getAllResidents = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "alias" : "alias",
  "tokens" : "tokens",
  "id" : "sha256",
  "type" : "Prosumer",
  "cash" : "cash",
  "energy" : "energy"
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "alias" : "alias",
  "tokens" : "tokens",
  "id" : "sha256",
  "type" : "Prosumer",
  "cash" : "cash",
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
 * Update resident by ID.
 *
 * id String Resident's ID
 * data Resident Resident's object
 * returns Resident
 **/
exports.updateResident = function(id,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "alias" : "alias",
  "tokens" : "tokens",
  "id" : "sha256",
  "type" : "Prosumer",
  "cash" : "cash",
  "energy" : "energy"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


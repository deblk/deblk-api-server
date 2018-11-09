'use strict';


/**
 * Create a new token
 *
 * data Token Token object
 * returns Token
 **/
exports.createToken = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "ownerType" : "Resident",
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
 * Delete token by id
 *
 * id String Token's id
 * returns Object
 **/
exports.deleteToken = function(id) {
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
 * Find a model instance by {{id}} from the data source.
 *
 * id String Token's id
 * returns Token
 **/
exports.findTokenById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "ownerType" : "Resident",
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
 * Get all tokens
 *
 * returns List
 **/
exports.getAllTokens = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "owner" : "owner",
  "ownerType" : "Resident",
  "id" : "id",
  "value" : 0.8008281904610115
}, {
  "owner" : "owner",
  "ownerType" : "Resident",
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
 * Update token by id
 *
 * id String Model id
 * data Token Token's object
 * returns Token
 **/
exports.updateToken = function(id,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "owner" : "owner",
  "ownerType" : "Resident",
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


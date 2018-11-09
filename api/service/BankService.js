'use strict';


/**
 * Create a new Bank
 *
 * data Bank Bank object
 * returns Bank
 **/
exports.createBank = function(data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "cash" : "cash"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete bank by id
 *
 * id String Bank's id
 * returns Object
 **/
exports.deleteBank = function(id) {
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
 * Find bank by id
 *
 * id String Bank object's id
 * returns Bank
 **/
exports.findBankById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "cash" : "cash"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all banks
 *
 * returns List
 **/
exports.getAllBanks = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "cash" : "cash"
}, {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "cash" : "cash"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update bank by id
 *
 * id String Bank's id
 * data Bank Bank's object
 * returns Bank
 **/
exports.updateBank = function(id,data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "tokens" : "tokens",
  "id" : "id",
  "cash" : "cash"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


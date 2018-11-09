const utils = require('fabric-client/lib/utils.js');
const logger = utils.getLogger('utils');
const path = require('path');
const Client = require('fabric-client')
const KEYSTOREPATH = './testkeystore.txt'

module.exports.tlsOptions = {
    trustedRoots: [],
    verify: false
};

// directory for file based KeyValueStore
module.exports.KVS = path.join("./", 'hfc-test-kvs');
module.exports.storePathForOrg = function(org) {
    return module.exports.KVS + '_' + org;
};


module.exports.getDefaultCryptoSuite = function(){
    const cryptoSuite = Client.newCryptoSuite();
    cryptoSuite.setCryptoKeyStore(Client.newCryptoKeyStore({path: KEYSTOREPATH}));
    return cryptoSuite;
}


function loadMSPConfig(name, mspdir) {
    const msp = {};
    msp.id = name;
    msp.rootCerts = readAllFiles(path.join(__dirname, mspdir, 'cacerts'));
    msp.admins = readAllFiles(path.join(__dirname, mspdir, 'admincerts'));
    return msp;
}
module.exports.loadMSPConfig = loadMSPConfig;
var sinon = require('sinon');
const tape = require('tape');
const _test = require('tape-promise').default;
const test = _test(tape);


var chai = require('chai');
var mocha = require('mocha');
var it = mocha.it;
var describe = mocha.describe;

var userUtil = require('./../../fabric/user-utils');
const Client = require('fabric-client');
const User = require('fabric-client/lib/User.js');



test('test1', (t) =>{

    const sandbox = sinon.sandbox.create();
    const stub = sandbox.stub(Client, );

    t.end();
})
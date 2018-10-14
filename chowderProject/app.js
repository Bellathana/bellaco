//using const to prevent override, actually we can use var mock
const mock = require('./mock');

//show what mock has inside, got from mock.js file
console.log(mock);

//using known method name: log
//mock.functionlog('xxx');
//using just what mock get from /mock.js
mock('got this message');

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

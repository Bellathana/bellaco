//to see what 5 components in function or function wrapper
//var x=;
//(function (exports, require, module, __filename, __dirname){})
//file name
console.log(__filename);
//path
console.log(__dirname);

var message = 'https://google.com';
function log(message){
  //send http request
  console.log(message);
}
//export Object
//module.exports.functionlog = log;
//export single function
module.exports = log;
//module.exports.endpoint = message;

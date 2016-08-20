// my-module.js 
exports.command = 'get'
 
exports.describe = 'make a get HTTP request'
 
exports.builder = {
  banana: {
    default: 'cool'
  },
  batman: {
    default: 'sad'
  }
}
 
exports.handler = function (argv) {
  // do something with argv. 
}
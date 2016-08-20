var request = require('request');
var url = "http://api.openweathermap.org/data/2.5/weather?APPID=fa31db7aa78bce57f6f6bbb3f4791c9d&q=";
var url1;


module.exports = function(location, callback){  
    url = url+location
    request({url:url, json:true}, function(error, response, body){
    callback(body);
})
}
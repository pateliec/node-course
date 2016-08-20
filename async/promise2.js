var weather = require("./weather.js");
var loc = require("./location.js");
var argv = require("yargs").option("location",{demand:false, alias:"l", type:"string"}).help().argv;
 var location = argv.location;
function getLocation()
{
     
        return new Promise(function(resolve, reject)
        {
          if(typeof location !== "undefined" && location.length>0)
            {
                resolve(location);
            }
          else{
            loc(function(data){
                resolve(data);
            })
         }
        }
)}

function getWeather(location)
{
    return new Promise(function(resolve, reject)
    {
        weather(location, function(message){
            resolve("its "+message.main.temp + " in "+message.name);
        })
    }
)}

getLocation()
    .then(function(data){
        return getWeather(data);
         })
    .then(function(data){
        console.log(data);
    })
var weather = require("./weather.js");
var loc = require("./location.js");
var argv = require("yargs").option("location",{demand:false, alias:"l", type:"string"}).help().argv;
function getWeather(location)
{
    return new Promise(function(resolve, reject){
        if(typeof location !== "undefined" && location.length>0)
        {
              weather(location, function(message){
                resolve("its "+message.main.temp + " in "+message.name);
            })
        }
        else
        {
           loc(function(location){ 
               if(location)
                   {
                      weather(location, function(message){
                        resolve("its "+message.main.temp + " in "+message.name);
                    })  
                   }
                else
                    {
                         reject("location not provided");
                    }
            });
        }
    })
    
    
}
var location = argv.location;
getWeather(location).then(function(data){
    console.log(data);
}, function(error){
    console.log(error);
})
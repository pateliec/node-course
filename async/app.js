var weather = require("./weather.js");
var loc = require("./location.js");
var argv = require("yargs").option("location",{demand:false, alias:"l", type:"string"}).help().argv;

var location = argv.location;

var city;

if(typeof location !== "undefined" && location.length>0)
    {
        city = location;
          weather(city, function(message){
            console.log("its "+message.main.temp + " in "+message.name);
        })
    }
    else
    {
       loc(function(city){ 
           if(city)
               {
                  weather(city, function(message){
                    console.log("its "+message.main.temp + " in "+message.name);
                })  
               }
        });
    }






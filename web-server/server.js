var express = require("express");

var app = express();

var middleware = {
    logger:function(req, res, next)
    {
        console.log("Request: "+ new Date().toString()+ " "+ req.method+ " "+ req.originalUrl);
        next();
    }
}
app.use(middleware.logger);
app.get("/about", function(req,res){
    res.send("<h2>This is Dhananjay Kumar!</h2>");
})

app.use(express.static(__dirname+"/public"));

app.listen(3000, function(){
    console.log("Server Started!")
});
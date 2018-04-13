var express = require('express');
var app = express();
var cities = {cities:["Bratislava","Amsterdam","Berlin","New York","San Francisco","Tokyo"]}

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(cities));
    res.end();
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Listening on localhost:"+port);

module.exports = app;

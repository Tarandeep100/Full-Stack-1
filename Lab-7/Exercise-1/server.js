const express = require("express");
const app = express();

app.get('/html', function(req,res){
    res.send("<html><head></head><body><h1>Hello World</h1></body></html>")
});

app.get('/json', function(req,res){
    res.json({firstname: 'John', lastname: 'Smith'});
});

app.get('/toronto+team', function(req,res){
    res.send("<html><head></head><body><h1>Go Toronto!</h1></body></html>")
});

app.get('/', function(req,res){
    res.send("Default!");
});

app.listen(3000);
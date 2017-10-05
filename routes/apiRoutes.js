var burgerInfo = require("../data/newBurger");
var express = require('express');
var app = express();

console.log(burgerInfo);


module.exports = function(app){
    app.get("/api/new", function(req, res){
        res.json(burgerInfo);
        console.log("I'm in get");
    })
    app.post("/api/new", function(req, res){
        burgerInfo.push(req.body);
        console.log(burgerInfo);
        console.log("i'm in post");
        console.log(req.body);
    });
};
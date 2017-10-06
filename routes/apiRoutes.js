var burgerInfo = require("../data/newBurger");
var express = require('express');
var app = express();

console.log(burgerInfo);


module.exports = function(app) {
    app.get("/api/newBurgers", function(req, res) {
    res.render('index', {burgers: burgerInfo});
    });
    
    app.get("/api/new", function(req, res) {
    res.json(burgerInfo);
    });
    
    app.get('*', function (req, res) {
        res.render('index', {burgers: burgerInfo});
        });
    
    app.post("/api/new", function(req, res){
        //burgerInfo.push(req.body);
        res.render('index', {burgers: burgerInfo});
        console.log(burgerInfo);
        console.log("i'm in post");
        console.log(req.body);
        });
    };
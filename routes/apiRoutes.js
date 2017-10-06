var burgerInfo = require("../data/newBurger");
var ateBurger = require("../data/eatenBurger");
var express = require('express');
var app = express();

//console.log(burgerInfo);
console.log(ateBurger);

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
    
    app.post("/api/newBurgers", function(req, res){
        burgerInfo.push(req.body);
        res.render('index', {burgers: burgerInfo});
        console.log(burgerInfo);
        //console.log("i'm in post");
        //console.log(req.body);
        });

    app.get("/api/eatenBurgers", function(req, res){
        res.render('index', {eat: ateBurger});
        console.log("I'm in get");
        });
    
    app.post("/api/eatenBurgers", function(req, res){
        ateBurger.push(req.body);
        res.render('index', {eat: ateBurger});
        console.log("I'm in post");
        console.log(req.body);
    });
    };
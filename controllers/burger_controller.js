var express = require("express");
var burgerFile = require("../models/burger.js");
var router = express.Router();
//Create the `router` for the app, and export the `router` at the end of your file.

//to redirect to the home page
router.get("/", function(req,res){
    res.redirect("/index");
});

//this to display all the burgers
router.get("/index", function (req, res){
// burgerFile.selectAll(function(data){
    // var burgerObject = {burgers:data};
    // res.render(//idk)
// })
})


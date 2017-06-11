// Requiring our models
var db = require("../models");
var path = require("path");

module.exports = function(app) {

    // Route for main/home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });   

    // Route for menu to ask user to either add new item or view their locker
    app.get("/menu", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/menu.html"));
    });

    // Route for viewing all items in your locker
    app.get("/inventory", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/inventory.html"));
    });

    // Route for adding new items
    app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    // Route for editing items
    app.get("/edit", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/edit.html"));
    }); 

}
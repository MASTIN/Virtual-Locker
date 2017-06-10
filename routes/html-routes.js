// Requiring our models
var db = require("../models");
var path = require("path");

module.exports = function(app) {

    // Route for main/home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });   

    // Route for menu to ask user to either add new item or view their locker
    app.get("/locker", function(req, res) {
        res.sendFile(path.join(__dirname, "locker.html"));
    });

    // Route for viewing all items in your locker
    app.get("/inventory", function(req, res) {
        res.sendFile(path.join(__dirname, "inventory.html"));
    });

    // Route for adding new items
    app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "add.html"));
    });

    // Route for editing items
    app.get("/edit", function(req, res) {
        res.sendFile(path.join(__dirname, "edit.html"));
    }); 

}
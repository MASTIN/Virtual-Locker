// Requiring our models
var db = require("../models");

module.exports = function(app) {
    
    app.get("/api/inventory", function(req, res) {
        var query = {};
        if (req.query.UserId) {
            query.UserId = req.query.UserId;
        }

        db.Item.findAll({
            where: query,
            include: [db.User]
        }).then(function(results) { 
            // console.log(results);  
            res.json(results);
        });
    });

    // POST route for saving a new post
    app.post("/api/item", function(req, res) {
        console.log("~~~~~~~HERE~~~~~~~~");
        console.log(req.body);
        db.Item.create(req.body).then(function(result) {
            res.redirect("/add.html");
            // res.json(result);
        });
    });

}
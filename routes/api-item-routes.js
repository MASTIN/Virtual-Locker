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

    // GET route for retrieving a single item
    app.get("/api/inventory/:id", function(req, res) {
        db.Item.findOne({
            where: {
            id: req.params.id
        }
        }).then(function(dbPost) {
        res.json(dbPost);
        });
    });

    // POST route for saving a new item
    app.post("/api/inventory", function(req, res) {
        db.Item.create(req.body)
        // .then(function(result) {
            // res.redirect("/inventory");
        // });
    });

    // PUT route for updating an item
    app.put("/api/inventory", function(req, res) {
        db.Item.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        }).then(function(result) {
            // res.redirect("/inventory");
        });
    });

    // DELETE route for deleting and item
    app.delete("/api/inventory/:id", function(req, res) {
        db.Item.destroy({
        where: {
            id: req.params.id
        }
        });
    });
};
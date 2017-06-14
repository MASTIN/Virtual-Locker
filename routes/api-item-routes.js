// Requiring our models
var db = require("../models");

module.exports = function(app) {
    //route for retrieving all items
    app.get("/api/inventory", function(req, res) {
        var query = {};
        if (req.query.UserId) {
            query.UserId = req.query.UserId;
        }

        db.Item.findAll({
            where: query,
            include: [db.User]
        }).then(function(results) { 
            res.json(results);
        });
    });

    // route for retrieving a single item
    app.get("/api/inventory/:id", function(req, res) {
        db.Item.findOne({
            where: {
            id: req.params.id
        }
        }).then(function(result) {
            res.json(result);
        });
    });

    // route for saving a new item
    app.post("/api/inventory", function(req, res) {
        db.Item.create(req.body)
    });

    // route for updating an item
    app.put("/api/inventory", function(req, res) {
        db.Item.update(
        req.body,
        {
            where: {
            id: req.body.id
            }
        });
    });

    // route for deleting an item
    app.delete("/api/inventory/:id", function(req, res) {
        db.Item.destroy({
        where: {
            id: req.params.id
        }
        });
    });
};
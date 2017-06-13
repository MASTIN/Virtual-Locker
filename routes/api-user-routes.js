var db = require("../models");

module.exports = function(app) {

    // POST route for creating a new user
    app.post("/api/user/:name?", function(req, res) {

        var name = req.params.name;

        db.User.create(req.body).then(function(result) {

            // res.json(result);
            res.redirect("/menu");
        });
    });

    app.get("/api/user", function(req, res) {
        db.User.findAll({
        }).then(function(results) { 
            // console.log(results);  
            res.json(results);
        });
    });











    // GET route for finding a user and their password
    // how to handle if password/email don't match
    app.get("/api/user", function(req, res) {
        console.log(req.body);
        db.User.findOne({

        where: {
            email: req.body.email,
            password: req.body.password
        },

        include: [db.Item]

        }).then(function(result) {

            if(!result) {
                return "Email or password was incorrect.";
            } else { 
                res.json(result);
                res.redirect("/inventory");
            }
        });
    });
};
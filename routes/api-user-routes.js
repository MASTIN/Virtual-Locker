var db = require("../models");

module.exports = function(app) {
    //POST route for creating a new user
    app.post("api/user", function(req, res) {
        db.User.create(req.body).then(function(result){
            res.redirect("/menu.html");
        });
    });
    //GET route for finding a user and their password
    //how to handle if password/email don't match
    app.get("api/user", function(req, res) {
        db.User.findOne({
        where: {
            email: req.body.email
        },
        include: [db.Item]
    }).then(function(result) {
        if(!result) {
            return "email not found";
        } else { 
            res.redirect("/inventory.html");
        }
        });
    });
};
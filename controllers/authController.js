var exports = module.exports = {}
var path = require("path");

// CONTROLLERS FOR USER AUTHENTICATION
exports.signup = function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/index.html"));
}

exports.signin = function(req, res) {
 
    res.sendFile(path.join(__dirname, "../public/index.html"));
}

exports.menu = function(req, res) {

	res.sendFile(path.join(__dirname, "../public/menu.html"));
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
    });
}

exports.add = function(req, res) {
	
	res.sendFile(path.join(__dirname, "../public/add.html"));
}    

exports.edit = function(req, res) {
	
	res.sendFile(path.join(__dirname, "../public/edit.html"));  
}    

exports.inventory = function(req, res) {
	
	res.sendFile(path.join(__dirname, "../public/inventory.html"));  
}    
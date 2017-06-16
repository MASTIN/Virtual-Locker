// Dependencies
// ------------------------------
var express = require('express');
var path = require("path");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();

// Models
var db = require("./models/");

// Initialize express
var app = express();
var PORT = process.env.PORT || 8080;
 
// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
 // persistent login sessions
app.use(passport.session());

// static directory
app.use(express.static(path.join(__dirname , "public")));

//*****ROUTES for inventory *****//
require("./routes/api-item-routes.js")(app);

// ROUTES Using Passport for Authentication
var authRoute = require('./routes/authRoutes.js')(app, passport);

// load passport strategies
require('./config/passport/passport.js')(passport, db.User);
 
// Sync Database
db.sequelize.sync({force: false}).then(function() {
 
    console.log('Database looks fine.');
    // start the server
	app.listen(PORT, function(err) { 
	    if (!err) console.log("SafeKeeper is listening on port: " + PORT);
	    else console.log(err)
	});
 
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database!")
});

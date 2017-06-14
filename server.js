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
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json"}));
 
// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// set up static directory for all public files
// app.use(express.static(path.join(__dirname , "app/views")));

// old code for static directory
app.use(express.static(path.join(__dirname , "public")));

//*****ROUTES*****//
// require("./routes/html-routes.js")(app);
require("./routes/api-item-routes.js")(app);
// require("./routes/api-user-routes.js")(app);

// ROUTES Using Passport for Authentication
var authRoute = require('./routes/authRoutes.js')(app, passport);

// load passport strategies
require('./config/passport/passport.js')(passport, db.User);
 
// Sync Database
db.sequelize.sync({force: true}).then(function() {
 
    console.log('Database looks fine.');
    // start the server
	app.listen(PORT, function(err) { 
	    if (!err) console.log("SafeKeeper is listening on port: " + PORT);
	    else console.log(err)
	});
 
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database!")
});

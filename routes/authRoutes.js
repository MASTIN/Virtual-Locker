var authController = require('../controllers/authController.js');

// ROUTES INVOLVING USER AUTHENTICATION 
module.exports = function(app, passport) {
 	// These bring us to the main login page
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    // When new user signs up (redirect to form if fails)
    app.post('/signup', passport.authenticate('local-signup', 
    	{
	        successRedirect: '/menu',	 
	        failureRedirect: '/signup'
    	}
	));

    // only authenticated users should see the other pages
	app.get('/menu', isLoggedIn, authController.menu);
	app.get('/add', isLoggedIn, authController.add);
	app.get('/inventory', isLoggedIn, authController.inventory);
	app.get('/edit', isLoggedIn, authController.edit);

	app.get('/logout',authController.logout);

	// When existing user signs in (redirect to form if fails)
	app.post('/signin', passport.authenticate('local-signin', 
		{
	        successRedirect: '/menu',	 
	        failureRedirect: '/signin'
    	}
	));

	// Route for getting some data about our user to be used client side
	app.get("/api/user_data", function(req, res) {
	    if (!req.user) {
	      // The user is not logged in, send back an empty object
	      res.json({
	      	name: "User",
	      });
	    }
	    else {
				// This capitalizes the first letter of each name, and lowercase all others
        req.user.name = (req.user.name).toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });

	      // Otherwise send back the user's name
	      res.json({
	        name: req.user.name,
	        email: req.user.email,
	        id: req.user.id
	      });
	    }
	  });

	// custom middleware to protect menu route
	function isLoggedIn(req, res, next) {
	 
	    if (req.isAuthenticated()) return next();

	    else res.redirect('/signin');
	}
}
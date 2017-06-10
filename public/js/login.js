    // This runs when a new user signs up
    $("#signupbutton").on("click", function(event) {
        
        event.preventDefault();

        // if all fields are filled
        if ( $("input.newuser").val() ) {
            var userEmail = $("#newUserEmail").val().trim();
            var userPassword = $("#newUserPassword").val().trim();
            var userName = $("#newUserName").val().trim();

            // This will create a new object to go into the database
            var newUser = {
                name: userName,
                email: userEmail,
                password: userPassword,
            };
            
            // send to the database
            $.post("/api/user", newUser, function() {
                alert("New user profile has been added to the database!");
            });

        } else {
            $(".alertUser").text("Please fill all required fields.");
        }
    
    });

    // This runs when an existing user signs in
    $("#signinbutton").on("click", function(event) {
        
        event.preventDefault();

        // if all fields are filled
        if ( $("input.existinguser").val() ) {
            var userEmail = $("#userEmail").val().trim();
            var userPassword = $("#userPassword").val().trim();

            // for filtering through the user table
            var user = {
                email: userEmail,
                password: userPassword,
            };
            
            // get the user from the database
            $.get("/api/user", user, function() {
                console.log("Successfully signed in.")
            });

        } else {
            $(".alertUser").text("Please fill all required fields.");
        }
    
    });

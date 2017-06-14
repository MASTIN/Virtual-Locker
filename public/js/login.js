 /////**********SHINE**********/////

var shine = new Shine(document.getElementById('landingPageHeader'));

var config = new shinejs.Config({
numSteps: 2,
opacity: 0.5,
offset: 0.25,
shadowRGB: new shinejs.Color(160, 160, 160)
});

window.addEventListener('mousemove', function(event) {

shine.light.position.x = event.clientX;
shine.light.position.y = event.clientY;
shine.config = config;
shine.draw();
}, false);


// $(function() {

//     /////**********GLOBAL VARIABLES**********/////
//     var displayname = "test";

//     /////**********FUNCTIONS**********/////

//     //Save the current user to localStorage for use on other pages
//     function getUserIds(data) {
//         var userLoggedInId = (data[(data.length - 1)].id);
//         var userLoggedInName = (data[(data.length - 1)].name)
//         localStorage.setItem("userId", userLoggedInId);
//         localStorage.setItem("userName", userLoggedInName);
//         location.href = "/menu";
//     }

//     /////**********EVENT LISTENERS**********/////

//     //Sign Up
//     $("#signupbutton").on("click", function(event) {
        
//         event.preventDefault();

//         //check if all fields are filled
//         if ( $("input.newuser").val() ) {

//             var userEmail = $("#newUserEmail").val().trim();
//             var userPassword = $("#newUserPassword").val().trim();
//             var userName = $("#newUserName").val().trim();

//             //Create a new object to go into the database
//             var newUser = {
//                 name: userName,
//                 email: userEmail,
//                 password: userPassword,
//             };

//             console.log(newUser);
            
//             // send to the database
//             // NEED TO CREATE AN INVENTORY TABLE FOR THE NEW USER
//             $.post("/api/user/" + newUser.name, newUser, function() {

//                 displayname = newUser.name + "\'s";

//                 alert(displayname + " profile has been added to the database!");                
                

//             }).fail(function(data) {

//                 alert("There was an error creating your user profile.");

//             });
//             // This will get the users to identify the last user
//             $.get("/api/user", getUserIds)

//         } else {
//             $(".alertUser").text("Please fill all required fields.");
//         }
    
//     });

//     //Sign In
//     $("#signinbutton").on("click", function(event) {
        
//         event.preventDefault();

//         // if all fields are filled
//         if ( $("input.existinguser").val() ) {

//             var userEmail = $("#userEmail").val().trim();
//             var userPassword = $("#userPassword").val().trim();

//             // for the get request to find user in the database
//             var user = {
//                 email: userEmail,
//                 password: userPassword,
//             };
            
//             // get the user from the database
//             // then we can get all associated items for that user
//             $.get("/api/user", user) .done(function( data ) {

//                 console.log("Successfully signed in.")
//                 console.log( "Data Loaded: " + data );

//                 //Store user info to be used on other pages
//                 // FIX THE data[2] info to refelct the user who is logged in
//                 var userLoggedInName = data[2].name;
//                 var userLoggedInId = data[2].id;
//                 localStorage.setItem("userId", userLoggedInId);
//                 localStorage.setItem("userName", userLoggedInName);

//                 //Redirect to menu
//                 window.location.href = "/menu";

//             }).fail(function(data) {
//                 alert("There was an error locating your user profile.");
//             });
//         } else {
//             $(".alertUser").text("Please fill all required fields.");
//         }   
//     });
// });
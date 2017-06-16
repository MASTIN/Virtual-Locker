"use strict"; 

var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

// To test, change anything in the goto, clicks, or types
nightmare
  // This goes to our heroku web page
  .goto("https://safe-stream-99507.herokuapp.com/")
  // Clicking on the sign in button
  .click("[data-target='#signinModal']")
  // Wait 1 sec for page to load
  .wait(1000)
  // Chnage these credentials to test loggin in
  .type("#userEmail", "stuart@mail.com")
  .type("#userPassword", "12345")
  // This will enter the submit button
  .click("[type=submit]")
  // Wait 1 sec for page to load
  .wait(1000)
  // This will check to see if log in is successful or not
  .evaluate(function() {
    // The menu page will only show if the credentials are good
    if (document.location.pathname === "/menu") {
      return "\nSUCCESSFULLY SIGNED IN\n";
    } else {
      return "\nFAIL. Did not sign in. Please check credentials.\n";
    }
  })
  .end()
  .then(function(result) {
    // This displays the result
    console.log(result);
  })
  .catch(function(error) {
    // This is displayed if there is any problem until the evaluate logic is run
    console.error("\nFAIL. Did not sign in. Please check the error:\n", error, "\n\n");
  });
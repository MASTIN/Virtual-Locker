$(function() { 
    // GET request to figure out which user is logged in
    // Then display their name on the page
  $.get("/api/user_data").then(function(data) {
      $(".showName").text(data.name + "\'s");
    });

  // when button is clicked, routes user to corresponding page
  $("#invButton").click(function () {
    location.href = "/inventory";
  });

  $("#addButton").click (function () {
    location.href = "/add";
  });

});
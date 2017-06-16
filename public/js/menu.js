$(function() { 
    // GET request to get current user info and display name
  $.get("/api/user_data").then(function(data) {
      $(".showName").text(data.name + "\'s");
    });

  //event listeners to route user to corresponding page
  $("#invButton").click(function () {
    location.href = "/inventory";
  });

  $("#addButton").click (function () {
    location.href = "/add";
  });
});
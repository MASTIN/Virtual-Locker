    var userLoggedInName = (localStorage.getItem("userName"));
    // this sets the name of the user to the html for personalization
    $("#showName").text(userLoggedInName);

	// when button is clicked, routes user to corresponding page
	$("#invButton").click(function () {
        location.href = "/inventory";
    });

	$("#addButton").click (function () {
        location.href = "/add";
    });

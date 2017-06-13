$(function(){ 
        
    /////**********GLOBAL VARIABLES***********///// 

    var userLoggedInName = (localStorage.getItem("userName"));
   
    /////**********EVENT LISTENERS**********/////

    //To inventory
	$("#invButton").click(function () {
        location.href = "/inventory";
    });
    //To add an item
	$("#addButton").click (function () {
        location.href = "/add";
    });

    /////**********ON PAGE LOAD**********/////

     //Display user name for personalization
    $("#showName").text(userLoggedInName);

})
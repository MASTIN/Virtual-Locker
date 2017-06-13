$(document).ready(function(){ 

    /////**********FUNCTIONS**********/////

    // Submits new item to the database
    function submitItem(newItem) {
        $.post("/api/inventory", newItem, function() { 
        });
        location.href = "/inventory.html";
    }
        
    /////**********EVENT LISTENERS**********/////
    
    $("#newItem").on("click", function(event) {
        event.preventDefault();

        //get UserId and UserName from local storage (from log-in)
        var userLoggedInId = (localStorage.getItem("userId"));
        var userLoggedInName = (localStorage.getItem("userName"));

        var newItemName = $("#item_name").val().trim();
        var newLocation = $("#location").val().trim();
        var newCategory = $("#category").val();

        // NEEDS FIXING - A value has to be entered or server will crash, hence the ||
        var newValue = $("#value").val() || 0;      
        // NEEDS FIXING - A proper date has to be entered or server will crash, hence the ||
        var newDatePurchased = $("#date_purchased").val() || "2049-12-31";
        // NEEDS FIXING - A proper date has to be entered or server will crash, hence the || 
        var newPurchasePrice = $("#purchase_price").val().trim() || 0;

        var newSerialNumber = $("#serial_number").val().trim();
        var newImage = $("#image").val().trim();
        var newNotes = $("#notes").val().trim();
        var userEntered = 3;

        // This checks to make sure these fields are not empty
         if (!newItemName) {
            $(".alertUser").text("Please enter an item name.");
            return;
        } 
         if (!newLocation) {
            $(".alertUser").text("Please enter a location.");
            return;
        }
         if (newCategory === "Category") {
            $(".alertUser").text("Please choose a category.");
            return;
        }

        //Create a new object to go into the database
        var newItem = {
            item_name: newItemName,
            location: newLocation,
            category: newCategory,
            value: newValue,
            date_purchased: newDatePurchased,
            purchase_price: newPurchasePrice,
            serial_number: newSerialNumber,
            image: newImage,
            notes: newNotes,

            // NEEDS FIXING - identify the UserID
            // NEEDS FIXING - identify the UserID
            // NEEDS FIXING - identify the UserID
            UserId: userLoggedInId
        };

        submitItem(newItem);
    });
}) 

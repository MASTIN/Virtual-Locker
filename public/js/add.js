$(function(){ 

    var userLoggedInId = "";
    var userLoggedInName = "";
    
    $.get("/api/user_data").then(function(data) {
      userLoggedInId = data.id;
      userLoggedInName = data.name;
    });

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

        var newItemName = $("#item_name").val().trim();
        var newLocation = $("#location").val().trim();
        var newCategory = $("#category").val();

        //A value has to be entered or server will crash
        var newValue = $("#value").val() || 0;      
        //A value has to be entered or server will crash
        var newDatePurchased = $("#date_purchased").val() || "2049-12-31";
        //A value has to be entered or server will crash
        var newPurchasePrice = $("#purchase_price").val().trim() || 0;

        var newSerialNumber = $("#serial_number").val().trim();
        var newImage = $("#image").val().trim();
        var newNotes = $("#notes").val().trim();
        var userEntered = userLoggedInId;

        //Check to make sure these fields are not empty
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
            UserId: userLoggedInId
        };
       
        //Capitalize the first letter after a space, and lowercase all others
        newItem.location = (newItem.location).toLowerCase().replace(/(^|\s)[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });

        submitItem(newItem);
    });
}) 

$(function() {
    var userLoggedInId = "";
    // This gets the id and name of the user
    $.get("/api/user_data").then(function(data) {
      userLoggedInId = data.id;
      userLoggedInName = data.name;
    });;

    /////**********FUNCTIONS**********/////

    //Update the post to the database
    function submitEditedItem(itemChanged) { 
        $.ajax({
            method: "PUT",
            url: "/api/inventory",
            data: itemChanged
        });
        //return user to inventory page
        location.href = "/inventory.html";
    }   

    /////**********EVENT LISTENERS**********/////

    $("#editedItem").on("click", function(event) {
        event.preventDefault();
       
        var editedItemName = $("#item_name").val().trim();
        var editedLocation = $("#location").val().trim();
        var editedCategory = $("#category").val();

        // NEEDS FIXING - A value has to be entered or server will crash, hence the ||
        var editedValue = $("#value").val() || 0;  
        // NEEDS FIXING - A proper date has to be entered or server will crash, hence the ||
        var editedDatePurchased = $("#date_purchased").val() || "2049-12-31";
         // NEEDS FIXING - A value has to be entered or server will crash, hence the ||
        var editedPurchasePrice = $("#purchase_price").val().trim() || 0;
        var editedSerialNumber = $("#serial_number").val().trim();
        var editedImage = $("#image").val().trim();
        var editedNotes = $("#loadNotes").val().trim();

        //Check to make sure these fields are not empty
        if (!editedItemName) {
            $(".alertUser").text("Please enter an item name.");
            return;
        } 
         if (!editedLocation) {
            $(".alertUser").text("Please enter a location.");
            return;
        }
         if (editedCategory === "Category") {
            $(".alertUser").text("Please choose a category.");
            return;
        }

        //Create a new object to go into the database
        var itemChanged = {
            id: itemBeingEdited.id,
            item_name: editedItemName,
            location: editedLocation,
            category: editedCategory,
            value: editedValue,
            date_purchased: editedDatePurchased,
            purchase_price: editedPurchasePrice,
            serial_number: editedSerialNumber,
            image: editedImage,
            notes: editedNotes,
            UserId: userLoggedInId
        };
        // This capitalizes the first letter of each word
        itemChanged.location = (itemChanged.location).toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        submitEditedItem(itemChanged)
    });

    /////**********ON PAGE LOAD**********/////

    //Pull the info from sessionstorage to display existing values in edit form
    var itemBeingEdited = JSON.parse(sessionStorage.getItem("itemtoEdit"));
    console.log(itemBeingEdited);

    $("#item_name").val(itemBeingEdited.item_name);
    $("#location").val(itemBeingEdited.location);
    $("#category").val(itemBeingEdited.category);
    $("#value").val(itemBeingEdited.value);
    $("#date_purchased").val(moment(itemBeingEdited.date_purchased).format("YYYY-MM-DD"));
    $("#purchase_price").val(itemBeingEdited.purchase_price);
    $("#serial_number").val(itemBeingEdited.serial_number);
    $("#image").val(itemBeingEdited.image);
    $("#loadNotes").val(itemBeingEdited.notes);

});
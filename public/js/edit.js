$(document).ready(function() {
    event.preventDefault();

    // This pulls the info from sessionstorage to auto-fill the page with current values
    var itemBeingEdited = JSON.parse(sessionStorage.getItem("itemtoEdit"));
    
    $("#item_name").val(itemBeingEdited.item_name);
    $("#location").val(itemBeingEdited.location);
    $("#category").val(itemBeingEdited.category);
    $("#value").val(itemBeingEdited.value);
    $("#date_purchased").val(moment(itemBeingEdited.date_purchased).format("YYYY-MM-DD"));
    $("#purchase_price").val(itemBeingEdited.purchase_price);
    $("#serial_number").val(itemBeingEdited.serial_number);
    $("#image").val(itemBeingEdited.image);
    $("#loadNotes").val(itemBeingEdited.notes);

    // When the user enters the submit button, this will grab the values
    $("#editedItem").on("click", function(event) {
        var editedItemName = $("#item_name").val().trim();
        var editedLocation = $("#location").val().trim();
        var editedCategory = $("#category").val();

        // NEEDS FIXING - A value has to be entered or server will crash, hence the ||
        // NEEDS FIXING - A value has to be entered or server will crash, hence the ||
        // NEEDS FIXING - A value has to be entered or server will crash, hence the ||
        var editedValue = $("#value").val() || 0;
        
        // NEEDS FIXING - A proper date has to be entered or server will crash, hence the ||
        // NEEDS FIXING - A proper date has to be entered or server will crash, hence the ||
        // NEEDS FIXING - A proper date has to be entered or server will crash, hence the ||
        var editedDatePurchased = $("#date_purchased").val() || "2049-12-31";
        
        var editedPurchasePrice = $("#purchase_price").val().trim() || 0;
        var editedSerialNumber = $("#serial_number").val().trim();
        var editedImage = $("#image").val().trim();
        var editedNotes = $("#notes").val().trim();
        var userEntered = 3;

        // This checks to make sure these fields are not empty
        if (!editedItemName || !editedLocation || editedCategory === "Category") {
            alert("Please make sure you fill in something for Name, Location, and Category");
            return;
        }

        // This will create a new object to go into the database
        var itemChanged = {
            item_name: editedItemName,
            location: editedLocation,
            category: editedCategory,
            value: editedValue,
            date_purchased: editedDatePurchased,
            purchase_price: editedPurchasePrice,
            serial_number: editedSerialNumber,
            image: editedImage,
            notes: editedNotes,

            // NEEDS FIXING - identify the UserID
            // NEEDS FIXING - identify the UserID
            // NEEDS FIXING - identify the UserID
            UserId: 3
        };
        submitEditedItem(itemChanged)
    });

    // THIS DOES NOT WORK YET.
    // This updates the post to the database and returns the user to the inventory page
    function submitEditedItem(itemChanged) {
        // $.post("/api/inventory/", itemChanged, function() {
            
        // }).done(function() {
        //     alert("This has been updated to the database!");
        //     // This works, but I don't like it.  The routes needs to be adjusted, just not sure how yet.
        //     location.href = "/inventory";
        // });

        console.log(req.body);

        //     $.ajax({
        //         method: "PUT",
        //         url: "/api/inventory",
        //         data: itemChanged
        //     }).done(function() {
                
        // });
        //     alert("This has been updated to the database!");
        //     // This works, but I don't like it.  The routes needs to be adjusted, just not sure how yet.
        //     location.href = "/inventory.html";
    }
    
});
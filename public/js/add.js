    // This runs when the user submits a new item
    $("#newItem").on("click", function(event) {
        
        event.preventDefault();
        var newItemName = $("#item_name").val().trim();
        var newLocation = $("#location").val().trim();
        var newCategory = $("#category").val();

        // NEEDS FIXING - A value has to be entered or server will crash, hence the ||
        // NEEDS FIXING - A value has to be entered or server will crash, hence the ||
        // NEEDS FIXING - A value has to be entered or server will crash, hence the ||
        var newValue = $("#value").val() || 0;
        
        // NEEDS FIXING - A proper date has to be entered or server will crash, hence the ||
        // NEEDS FIXING - A proper date has to be entered or server will crash, hence the ||
        // NEEDS FIXING - A proper date has to be entered or server will crash, hence the ||
        var newDatePurchased = $("#date_purchased").val() || "2049-12-31";
        
        var newPurchasePrice = $("#purchase_price").val().trim() || 0;
        var newSerialNumber = $("#serial_number").val().trim();
        var newImage = $("#image").val().trim();
        var newNotes = $("#notes").val().trim();
        var userEntered = 3;

        // This checks to make sure these fields are not empty
        if (!newItemName || !newLocation || newCategory === "Category") {
            alert("Please make sure you fill in something for Name, Location, and Category");
            return;
        }

        // This will create a new object to go into the database
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
            UserId: 3
        };

        submitItem(newItem);
    });

    // This function submits the item to the database
    function submitItem(newItem) {
        $.post("/api/inventory", newItem, function() { 
        });
        alert("This has been added to the database!");
            location.href = "/inventory.html";
    }

$(document).ready(function() {
    // initialize DataTable
   $('#inventory').DataTable();
   
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
        
        var newPurchasedPrice = $("#purchase_price").val().trim();
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
            purchased_price: newPurchasedPrice,
            serial_number: newSerialNumber,
            image: newImage,
            notes: newNotes,

            // NEEDS FIXING - identify the UserID
            // NEEDS FIXING - identify the UserID
            // NEEDS FIXING - identify the UserID
            UserId: 3
        };
        // THIS IS COMMENTED OUT B/C INDIA IS WORKING ON A BETTER SOLUTION ON THE ADD.HTML PAGE
        // BUT LEAVE THIS FOR NOW
        // submitItem(newItem);
    });

    // THIS IS COMMENTED OUT B/C INDIA IS WORKING ON A BETTER SOLUTION ON THE ADD.HTML PAGE
    // BUT LEAVE THIS FOR NOW
    // This function submits the item to the database
    // function submitItem(post) {
    //     $.post("/api/item", post, function() {
    //         alert("This has been added to the database!");
    //     });
    // }

    // This section will get infro from the db and display the items on the inventory.html page
    function getInventory() {
        $.get("/api/inventory", displayData);
    }

    function displayData(data) {
        // This will display the rows of data from the database into the table
        for (var i = 0; i < data.length; i++) {

            var rowofdata = $("<tr>" + "<td>" + data[i].item_name + "</td><td>" + data[i].location + 
            "</td><td>" + data[i].category + "</td><td>" + data[i].value + "</td><td>" + moment(data[i].date_purchased).format("L") +
            "</td><td>" + data[i].purchase_price + "</td><td>" + data[i].serial_number + "</td><td>" +
            "<i id='photo' class='fa fa-picture-o' src='" + data[i].image + "' aria-hidden='true'></i>" +
            "</td><td>" + data[i].notes + "</td><td>" +
            "<i value='" + i + "' class='fa fa-pencil fa-lg updateItem' aria-hidden='true'></i>" +
            "</td><td>" + "<i value='" + i + "' class='fa fa-trash fa-lg deleteItem' aria-hidden='true'></i>" + "</tr>");
            
            $("#dbInventory").append(rowofdata);
        }

        // This shows the image when the picture icon is clicked
        $(".fa-picture-o").click(function(){
            alert("This will show the image. When it's coded correctly");
        });

        // This deletes a line when the trashcan icon on a line is clicked
        $(".deleteItem").click(function(){
            alert("This will delete the item completely. When it's coded correctly");
        });

        // This updates an item when the pencil icon on that line is clicked
        $(".updateItem").click(function(){
            alert("This will delete the item completely. When it's coded correctly");
        });

    }
    
    // This runs when inventory.html is loaded.
    if (window.location.pathname === '/inventory')
        { 
            getInventory();
        }

});
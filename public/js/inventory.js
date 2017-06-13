$(document).ready(function() {
    var userLoggedInId = (localStorage.getItem("userId"));
    var userLoggedInName = (localStorage.getItem("userName"));
    
    // this sets the name of the user to the html for personalization
    $("#theUsersName").text(userLoggedInName);

    /* Formatting function for row details */
    function format (data) {

        var itemDetails = "<div class='row'>";
        itemDetails += "<div class='col-md-6'><h5>Notes:<h5><p>" + data.notes + "</p>";
        itemDetails += "<div class='col-md-6'>" + data.image + "</div></div>";
        return itemDetails;
    }
    
    $.get("/api/inventory", createDataArray);

    var arrayofItems = [];
    
    // This will create the array of objects
    function createDataArray(data) {
        
        // This will display the rows of data from the database into the table
        for (var i = 0; i < data.length; i++) {
            
            // This will only show the inventory of the user who is logged in
            if (userLoggedInId != data[i].UserId) {
                
            } else {
                // This empties the object each time the loop is run
                var objArray = {};
                // These commands set the properties of the object
                objArray.item_name = data[i].item_name;
                objArray.location = data[i].location;
                objArray.category = data[i].category;
                objArray.value = "$" + data[i].value.toLocaleString();
                objArray.date_purchased = moment(data[i].date_purchased).format("L");
                objArray.purchase_price = "$" + data[i].purchase_price.toLocaleString();
                objArray.serial_number = data[i].serial_number;
                objArray.image = "<img class='tableImage' src='" + data[i].image + "'/>"
                objArray.notes = data[i].notes;
                objArray.update = "<i id='updateMe' value='" + i + "' class='fa fa-pencil fa-lg updateItem center-td' aria-hidden='true'></i>";
                
                //changed value to id from DB not array index - was not deleting correct items
                //did the same to update object but screwed up all Stuart's stuff so put it back
                objArray.delete = "<a href='#'><i id='deleteMe' value='" + data[i].id + "' class='fa fa-trash fa-lg deleteItem center-td' aria-hidden='true'></i></a>";

                // This pushes each new object to an array
                arrayofItems.push(objArray);
            }
        }
        // This function orders to create the table on inventory.html page
        makeTable();
    };

    // This will create the table and show rows of data on the inventory.html page
    function makeTable() {
        var table = $('#inventory').DataTable({
            "data": arrayofItems,
            "columns": [
                {
                    "className": 'details-control',
                    "orderable": false,
                    "data": null,
                    "defaultContent": ""
                },
                { 
                    "data": "item_name",
                    "width": "150px" 
                },
                { 
                    "data": "location",
                    "width": "150px" 
                },
                { 
                    "data": "category",
                    "width": "150px"
                },
                { "data": "value" },
                { "data": "date_purchased" },
                { "data": "purchase_price" },
                { 
                    "data": "serial_number",
                    "width": "150px" 
                },
                { "data": "update" },
                { "data": "delete" }
            ],
            "order": [[2, 'asc']]
        });
        
        // Add event listener for opening and closing details
        $('#inventory tbody').on('click', 'td.details-control', function () {
            var tr = $(this).closest('tr');
            var row = table.row( tr );
    
            if (row.child.isShown()) {
                // This row is already open - close it
                row.child.hide();
                tr.removeClass('shown');
            } else {
                // Open this row
                row.child(format(row.data())).show();
                tr.addClass('shown');
            }
        });
    }

    // This will get the info of the item that was clicked and save to session storage
    // to be used by edit.js & edit.html page
    $("#inventory").on("click", ".updateItem", function() {
        var id = $(this).attr('value');

        $.get("/api/inventory", editItem);

        function editItem(data) {
            sessionStorage.setItem("itemtoEdit", JSON.stringify(data[id]));
            gotoEditPage();
         }
        
        function gotoEditPage() {
            location.href = "/edit";
        }
    });

     // This deletes a line when the trashcan icon on a line is clicked
    $("#inventory").on("click", ".deleteItem", function() {
        console.log($(this).attr('value'));
        var id = $(this).attr('value');
        $.ajax({
            method: "DELETE",
            url: "/api/inventory/" + id

        });
        location.reload();
    });
        
});
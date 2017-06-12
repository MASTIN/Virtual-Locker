$(document).ready(function() {
    event.preventDefault();

    // This deletes a line when the trashcan icon on a line is clicked
    $("#inventory").on("click", ".deleteItem", function() {
        var id = $(this).data("id");
        $.ajax({
            method: "DELETE",
         url: "/api/inventory/" + id
        });
    });

    /* Formatting function for row details - modify as you need */
    function format (data) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
            '<tr>'+
                '<td>Notes:</td>'+
                '<td>'+data.notes+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>Image:</td>'+
                '<td>'+data.image+'</td>'+
            '</tr>'+
        '</table>';
    }
 
    $.get("/api/inventory", createDataArray);
    var arrayofItems = [];
    
    // This will create the array of objects
    function createDataArray(data) {
        
        // This will display the rows of data from the database into the table
        for (var i = 0; i < data.length; i++) {
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
        objArray.image = "<img src='" + data[i].image + "' max-height='200'>"
        objArray.notes = data[i].notes;
        objArray.update = "<a href='edit.html'><i id='updateMe' value='" + i + "' class='fa fa-pencil fa-lg updateItem center-td' aria-hidden='true'></i></a>";
        objArray.delete = "<i id='deleteMe' value='" + i + "' class='fa fa-trash fa-lg deleteItem center-td' aria-hidden='true'></i>";

        // This pushes each new object to an array
        arrayofItems.push(objArray);
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
                    "defaultContent": ''
                },
                { "data": "item_name" },
                { "data": "location" },
                { "data": "category" },
                { "data": "value" },
                { "data": "date_purchased" },
                { "data": "purchase_price" },
                { "data": "serial_number" },
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



});
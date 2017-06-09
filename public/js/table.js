$(document).ready(function() {
    // initialize DataTable
   var table = $('#inventory').DataTable({
        'order': [[2 , 'asc']]
   });

    // This section will get info from the db and display the items on the inventory.html page
    function getInventory() {
        $.get("/api/inventory", displayData);
    }

    function displayData(data) {
         // This will display the rows of data from the database into the table
        for (var i = 0; i < data.length; i++) {

            var rowofdata = [ 
                data[i].item_name,
                data[i].location,
                data[i].category,
                "$" + data[i].value.toLocaleString(),
                moment(data[i].date_purchased).format("L"),
                "$" + data[i].purchase_price.toLocaleString(),
                data[i].serial_number,
                "<i id='photo' class='fa fa-picture-o fa-lg center-td' src='" + data[i].image + "' aria-hidden='true'></i>",
                data[i].notes,
                "<i value='" + i + "' class='fa fa-pencil fa-lg updateItem center-td' aria-hidden='true'></i>",
                "<i value='" + i + "' class='fa fa-trash fa-lg deleteItem center-td' aria-hidden='true'></i>"];

            table.row.add(rowofdata).draw();
        }

        // This shows the image when the picture icon is clicked
        $(".fa-picture-o").click(function(){
            alert("This will show the image. When it's coded correctly");
        });

        // This deletes a line when the trashcan icon on a line is clicked
        $(".deleteItem").click(function(){
            alert("This will delete the selected item completely. When it's coded correctly");
        });

        // This updates an item when the pencil icon on that line is clicked
        $(".updateItem").click(function(){
            alert("This will update the selected item. When it's coded correctly");
        });

    }
    getInventory();
});
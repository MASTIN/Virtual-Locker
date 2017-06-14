$(function() {
    
    /////**********GLOBAL VARIABLES***********/////
      //Get user info
    var userLoggedInId = "";
    var userLoggedInName = "";
    
    $.get("/api/user_data").then(function(data) {
      userLoggedInId = data.id;
      userLoggedInName = data.name;
    });;
  
    //Store objects from DB
    var arrayofItems = [];   
    
    /////**********FUNCTIONS**********/////

    //Formatting function for row details //
    function format (data) {
        var itemDetails = "<div class='row'>";
        itemDetails += "<div class='col-md-6'><h5>Notes:<h5><p>" + data.notes + "</p>";
        itemDetails += "<div class='col-md-6'>" + data.image + "</div></div>";
        return itemDetails;
    }
    
   //Create the array of objects
    function createDataArray(data) {
        //Display the rows of data from the database into the table
        for (var i = 0; i < data.length; i++) {
            //Show the inventory of the user who is logged in
            if (userLoggedInId != data[i].UserId) {   
            } else {
                //Empty the object each time the loop is run
                var objArray = {};
                //Set the properties of the object
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
                objArray.delete = "<a href='#'><i id='deleteMe' value='" + data[i].id + "' class='fa fa-trash fa-lg deleteItem center-td' aria-hidden='true'></i></a>";

                arrayofItems.push(objArray);
            }
        }
        // Create the table on inventory.html page
        makeTable();
    }

    //Create the table and show rows of data on the inventory.html page
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
                //Close open row
                row.child.hide();
                tr.removeClass('shown');
            } else {
                //Open closed row
                row.child(format(row.data())).show();
                tr.addClass('shown');
            }
        });
    }

    /////**********EVENT LISTENERS**********/////

    // Get the info of the item that was clicked and save to session storage
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

     //Deletes row when the trashcan icon on a line is clicked
    $("#inventory").on("click", ".deleteItem", function() {
        console.log($(this).attr('value'));
        var id = $(this).attr('value');
        $.ajax({
            method: "DELETE",
            url: "/api/inventory/" + id

        });
        location.reload();
    });

    /////**********ON PAGE LOAD**********/////

    //Display user name for personalization
    $("#theUsersName").text(userLoggedInName);

    //Get and display inventory data
    $.get("/api/inventory", createDataArray);
   
});
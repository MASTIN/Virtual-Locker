
// move delete function to inventory.js
//link edit.js to edit.html

//keep working on edit later
    $(".updateItem").click(updateItem);

    function updateItem() {
        var id = $(this).data("id");
        $.ajax({
            method: "PUT",
            url: "/api/inventory/" + id
        }).done(function() {
            
        })
    };

    function deleteItem() {
        var id = $(this).data("id");
        $.ajax({
        method: "DELETE",
        url: "/api/inventory/" + id
    })
    .done(function() {
        
    });
  };


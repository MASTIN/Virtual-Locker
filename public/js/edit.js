//link edit.js to edit.html when ready

// This updates an item when the pencil icon on that line is clicked

$("#inventory").on("click", ".updateItem", function() {
        var id = $(this).data("id");
        $.ajax({
            method: "PUT",
            url: "/api/inventory/" + id
        }).done(function() {
            
        })
});



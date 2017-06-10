

    $(".updateItem").click(updateItem);
    $(".deleteItem").click(deleteItem);

    function updateItem() {

    };

    function deleteItem() {
        var id = $(this).data("id");
        $.ajax({
        method: "DELETE",
        url: "/api/inventory/" + id
    })
    .done(function() {
        getInventory();
    });
  };


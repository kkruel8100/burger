// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");

    // Change devour default false which is equal to 0 to true which is equal to 1
    var newDevour = 1;
    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {

    event.preventDefault();

    if ($("#bu").val().length > 0) {
      var newBurger = {
        burger_name: $("#bu").val().trim(),
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    } else {
      alert("Please enter a burger name before pressing submit.")
    }
  });
});
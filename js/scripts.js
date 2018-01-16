$(document).ready(function() {
  var groceryList = [];
  $("form#groceriesForm").submit(function(event) {
    var groceriesInput = $("#input-Groceries").val()
    groceryList.push(groceriesInput);
    groceryList.sort();
    var groceryListTwo = groceryList.map(function(item) {
      return item.toUpperCase();
    });
    $("li#listAfter").text(groceryListTwo);
    event.preventDefault();
  });
});

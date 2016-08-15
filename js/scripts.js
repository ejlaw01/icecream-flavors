$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var flavors = ["strawberry", "mint", "chocolate", "vanilla", "caramel", "pistachio", "New York cherry"]
    flavors.forEach(function(flavor) {
      $("ul#flavors").append("<li>" + flavor + "</li>");
    });
  });
});

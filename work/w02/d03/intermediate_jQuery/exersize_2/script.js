var foods = [ "Burger", "Pizza", "Curry Chicken", "Salad"],
	drinks = [ "Coca Cola", "Pepsi", "Mt. Dew", "Sprit" ];

var $drinksList =  $("#drinks");
var $foodsList =  $("#foods");

$(drinks).each( function ( index, value ) {
	$drinksList.append("<li>"+value+"</li>");
});

$(foods).each( function ( index, value ) {
	$foodsList.append("<li>"+value+"</li>");
});

$drinksList.children().each( function ( index, value) {

console.log(this, index, value);

});

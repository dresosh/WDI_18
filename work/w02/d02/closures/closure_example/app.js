
var boxes = document.querySelectorAll(".box");

var button = document.querySelector("button");

	var x = "hello";

button.addEventListener("click", function(){

	console.log(x)
})

var x = "goodbye"



for(var i = 0; i < boxes.length; i++){
	boxes[i].addEventListener("click", function(){
		console.log("box number " + i + " was clicked")
	})
}


for(var i = 0; i < boxes.length; i++){
	boxes[i].addEventListener("click", (function(i){
		console.log("making the functions!")
		return function(){
			console.log("you clicked on box " + i)
		}
	})(i))
}



// for(var i = 0; i < boxes.length; i++){
// 	boxes[i].addEventListener("click", (function(i){
// 		return function(){
// 			console.log("you clicked on box " + i)
// 		}
		
// 	})(i))
// }


// 4. Let's make a reset button, that sets the innerHTML of all the boxes to empty;

var turnCount = 0;
var boxes = document.querySelectorAll(".box");
var button = document.querySelector("button")

button.addEventListener("click", resetBoard);

for(var i = 0; i < boxes.length; i++){
	boxes[i].addEventListener("click", takeTurn)
}

function takeTurn(){
	if(!this.innerHTML){
		if(turnCount % 2 === 0){
			this.innerHTML = "X";
		} else {
			this.innerHTML = "O";
		}
		turnCount++;
	} 	
}

function resetBoard(){
	for(var i = 0; i < boxes.length; i++){
		boxes[i].innerHTML = ""
	}
}
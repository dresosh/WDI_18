// 3. The innerHTML should change to X or O depending on whose turn it is. 
// We need to keep track of turns. We can do this a number of ways - having a turn counter might work;
var turnCount = 0;
var boxes = document.querySelectorAll(".box");

console.log(boxes);

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



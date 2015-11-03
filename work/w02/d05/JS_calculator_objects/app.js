var myCalculator = new Calculator();

var numbers = document.querySelectorAll(".number");
var display = document.querySelector(".display")
var operatorButtons = document.querySelectorAll(".operator")
var equalsButton = document.querySelector(".equals")
var clearButton = document.querySelector(".clear")

equalsButton.addEventListener("click", function(){
	myCalculator.equals();
})

clearButton.addEventListener("click", function(){
	myCalculator.clear();
})

for (var i = 0; i < numbers.length; i++){
	numbers[i].addEventListener("click", function(){
		console.log(this.innerHTML);
		myCalculator.renderInDisplay(this.innerHTML);
	})
}

for(var i = 0; i < operatorButtons.length; i++){
	operatorButtons[i].addEventListener("click", function(){
		myCalculator.operate(this.innerHTML);
	})
}




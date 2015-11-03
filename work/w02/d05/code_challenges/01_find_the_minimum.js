// Write a function called 'min', that takes two integers as arguments.
// The function should return the smallest integer.

// Example tests:
// min(3,9) => 3
// min(-12,-19) => -19

function min(a,b){
	if (a < b){
		return a;
	} else if (b < a){
		return b;
	} else {
		return "numbers are equal";
	}
}
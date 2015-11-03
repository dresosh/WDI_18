// Write a function called 'range' that takes two arguments, start and end, and 
// returns an array containing all the numbers from start up to (and including) end.

// For example:
// range(1,8) => [1, 2, 3, 4, 5, 6, 7, 8];
// range(-3,2) => [-3, -2, -1, 0, 1, 2]; 

function range(start,end){
	var newArray = [];
	for(var i = start; i <= end; i++){
		newArray.push(i);
	}
	return newArray;
}
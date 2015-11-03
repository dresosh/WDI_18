// Write a function called 'countBs' that takes a string as its only argument 
// and returns a number that indicates how many uppercase “B” characters are in the string.

// For example:
// countBs("Bob went to Bolivia on his holiday") => 2;
// countBs("Bananas are bloody nice") => 1;

// Write your countBs function here:

function countBs(str){
	var count = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] === "B"){
			count++;
		}
	}
	return count;
}

// Now, write another function called 'countCharacters', that takes two arguments.
// The first argument is a string, the second argument is a single letter (as a string)
// The function should return the number of occurrences of that letter in the first string.

// For example:
// countCharacters("little example", "l") => 3;
// countCharacters("little example","x") => 1;
// countCharacters("little example","t") => 2;

// Write your countCharacters function here:

function countChar(str,letter){
	var count = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] === letter){
			count++;
		}
	}
	return count;
}



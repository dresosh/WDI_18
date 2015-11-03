//My turn to be uppercase (this is O(n^2):

function myTurnToBeUppercase(arr){
	// iterate through the array
	for(var i = 0; i < arr.length; i++){
		// uppercase the current item
		arr[i] = arr[i].toUpperCase()
		// iterating through the array AGAIN, console logginy everything
		for(var j = 0; j < arr.length; j++){
			console.log(arr[j])
		}
		// downcasing the item I just upcased
		arr[i] = arr[i].toLowerCase()

		console.log("------")
	}
}

myTurnToBeUppercase(["apples", "pears", "bananas", "apricots"])


// This is an O(n^2) - pretty slooooow. You won't get the job with this :(
// Actually, it's such a super freaky deaky way to solve
// the problem they'd probably hire you because 
// your crazy little mind is so insane. 

function countUpTo(n){
	result = 0
	for(var i = 1; i < n; i++){
		for(var j = 1; j <= i; j++){
			result += 1
		}
	}
	return result
}

countUpTo(3)


// This is an O(n) solution. Not bad at all. 
// If you did it this way, you should be proud of yourself. 
// Good enough to get you the job, but only the medium bucks job $$$

function countUpTo(n){
	result = 0
	for(var i = 1; i < n; i++){
		result += i
	}
	return result
}


// This is the O(1) solution. Only for straight up stone-cold time-travelling NASA geniuses from the future. 
// You will DEFINITELY get the big bucks with this $$$$$

function countUpTo(n){
	return n*(n+1)/2
}




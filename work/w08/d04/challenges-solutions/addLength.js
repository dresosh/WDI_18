function addLength(str){)
	myArray = []

	str.split(' ').forEach(function(word){
		word = word + " " + word.length
		myArray.push(word)
	})

	console.log(myArray)
}



String.prototype.hashtags = function(){
	var myArray = []

	this.split(' ').forEach(function(word){
		if(word[0] === "#"){
			myArray.push(word)
		}
	})

	return myArray
}

function shortcut(str){
	var vowels = ["a", "e", "i", "o", "u"]

	var newString = ""

	str.split('').forEach(function(letter){
		if(vowels.indexOf(letter) === -1){
			newString += letter
		}
	})

	return newString
}

shortcut("hello")
// => ["h", "e", "l", "l", "o"]

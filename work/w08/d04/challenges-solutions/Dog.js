function Dog(name, age, breed){
	this.name = name,
	this.age = age, 
	this.breed = breed
}


Dog.prototype.dogYears = function(){
	return (this.age*7)
}

Dog.prototype.answerPhone = function(){
	console.log("hello, yes, this is dog")
}
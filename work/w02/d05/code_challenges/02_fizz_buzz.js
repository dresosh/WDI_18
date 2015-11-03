// Write a program that uses console.log to print 
// all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, console.log "Fizz" instead of the number, 
// and for numbers divisible by 5 (and not 3), console.log "Buzz" instead.
// If a number is divisible by both 3 AND 5, console.log "FizzBuzz".


for(var i = 1; i <= 100; i++){
	if(i%15 === 0){
		console.log("fizzbuzz");
	} else if(i%5 === 0){
		console.log("buzz");
	} else if(i%3 === 0){
		console.log("fizz");
	} else {
		console.log(i);
	}
}

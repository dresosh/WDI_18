#Closures

###SWBAT
* Explain what a closure is
* Build a simple closure
* Use closures to build and return other functions

In order to understand closures, we need to be absolutely sure that we understand two things really well:

1) Scope

2) Treating functions as objects that can passed around.


###1) Let's make sure we understand scope

```
function showAmount(){
	var quantity = 10;
	
	function showFood(){
		var food = "tacos";
		
		function showDrink(){
			var drink = "cerveza";
		}
	}
}
```

Let's draw the scoping of the variables;


###2) Now let's make sure we understand functions as objects that can be passed around:

```
function outerFunction(){
	return "Hello!"
}
```

Question - What happens when we call outerFunction()?

Question - What happens when we assign a variable to the _result_ of running outerFunction()?


Here is the same function, but instead of returning a string to us, it is now returning ANOTHER FUNCTION.

```
function outerFunction(){
	return function(){
		console.log("This is the nested function")
	}
}
```

Question - What happens when we call outerFunction()?

Question - What happens when we assign a variable to the _result_ of running outerFunction()?

Let's run this in repl.it and play around with it. 


###Your task:
- Write a function that returns another function.

- Assign the result of calling the outer function to a variable.

- Invoke this function variable.



###Your task:

- Write out this code in repl.it:

```
function testClosure(){
	var x = 10;

	return function(){
		console.log(x);
	};
}
```

- Assign the result of calling testClosure() to a new variable.

- Invoke this new variable function. Is the result intuitive to you?


This is a CLOSURE!

A closure is an inner function that has access to the outer (enclosing) function's variables. The closure has access to:

1) its own scope (variables defined between its curly brackets),

2) the outer function's variables,

3) and the global variables.

The reason why people have difficulty with the concept is that, in this case, the testClosure function has already run. The variable "x" only exists within the scope of the testClosure function. Now that the testClosure function has already run, the variable "x" shouldn't really exist anymore.

It is as if the inner function "remembers" the environment in which it was created. 

###Your task:

1) Write out this code in repl.it:

```
function favoriteSportsTeam(teamName){
	return function(){
		console.log("The best team are the " + teamName);
	};
}

```

2) Invoke favoriteSportsTeam with the argument "Yankees", and assign the result to a variable called newYorker.

3) Invoke favoriteSportsTeam with the argument "Red Sox", and assign the result to a variable called bostonian.

4) Invoke favoriteSportsTeam with the argument "Dodgers", and assign the result to a variable called angeleno.

5) Call each of the variables you just made.

6) Explain to your neighbour what a closure is, and what makes this a closure.


----


Closures are very useful for "function factories". In the above example, we have created three new functions. If we inspected each function, they would look identical:

```
var newYorker = function(){
	console.log("The best team are the " + teamName);
};

var bostonian = function(){
	console.log("The best team are the " + teamName);
};

var angeleno = function(){
	console.log("The best team are the " + teamName);
};
```

But we know they are not the same - in each one, the variable teamName is actually different. It remembers what it was when it was created!

###Activity - 10 mins

- Explain to a partner what is going on here. What will be logged?

```
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var doubler = multiplier(2);

doubler(5);

```

- Use this function to create two new functions - "tripler" and "quadrupler".


###Real world closures:

###Example 1 - counters:

This one seems to pop up in interviews quite a bit - it's a classic example to illustrate closures.

The task starts as follows (hint - I like to write it in repl.it, and then copy/paste into my console so I can repeatedly call each function):

- Make a variable called count, and set it equal to 0. Then write a function that increments this variable, and console logs it.

- That's great, but now I want a function that MAKES counter functions for me. I want to count several different things at the same time. 


###Example 2 - Timing issues:

Let's take a look at an early example of Tic Tac Toe.

When we make a function, it remembers the variables that were around when it was created, right? But.... what happens if we change those variables BEFORE the function we created runs? 

Bad things happen....




###Example 3 - More timing issues... using setTimeout inside a for loop:

THIS IS ENOUGH TO MAKE YOU WANT TO QUIT PROGRAMMING FOREVER, SO WE WILL NOT COVER THIS IN THE LESSON! 

Let's say we wanted to sequentially print out the numbers 0 to 10 using a for loop:

```
for(var i = 0; i < 10; i++) {
    console.log(i);    
}
```

Now let's say you want to print out the numbers, but with a gap of a second between each one.

Typically, we would use the setTimeout function for this.

It works like this:
```
setTimeout(function(){
	console.log("Was this worth the wait?")
}, 3000)
```

So, intuitively, this is how we might write our for loop:

```
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);  
    }, 1000*i);
}
```
Now we are saying please console.log whatever the value of "i" is.

The problem is that the variable i, within each of the anonymous functions, is bound to the same variable outside of the function, the global variable "i".

After the loop terminates, the global variable i has the value of 10, and that's what the function 'sees'

What we want to do is bind the variable within each function to a separate, unchanging value outside of the function. Within the for loop, for each value of i, we need to immediately invoke a function expression that returns another function that is bound to this current value of i. 

How do we "immediately invoke a function expression"? 

```
// A regular function:
function sayHi(){
	console.log("Hi");
}


That we are immediately invoking:
(function sayHi(){
	console.log("Hi");
})()


Because we are IMMEDIATELY invoking it, we don't actually need to give it a name - we will never actually refer to it anywhere in our code, so we can remove the name and make it anonymous:

(function(){
	console.log("Hi");
})()


And what is even cooler, is that we can immediately invoke it with an argument, like this:

(function(word){
	console.log(word);
})("hello")

We call this final example an "IMMEDIATELY INVOKED FUNCTION EXPRESSION" (or IIFE, pronounced "iffy"). 

Iffies are very cool because everything inside them is wrapped up in its own scope - it will not pollute the global namespace. 

```

Ok, now back to our setTimeout inside our loop. We can immediately invoke a function to return another function for the setTimeout to do its work on. 

```
for (var i = 0; i < 10; i++) {
    setTimeout((function(i) {
        return function() { 
            console.log(i); 
        }; 
    })(i), 1000*i);
}
```


###Activity:

Write down what a closure is, and why you want to use one (5 min) and explain to the person next to you.



------
Appendix

Counter repl.it: https://repl.it/BCS9

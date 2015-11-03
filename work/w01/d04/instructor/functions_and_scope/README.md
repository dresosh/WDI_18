#FUNctions! and Javascript scope! <br>

https://www.youtube.com/watch?v=5kTvLVRXcJs


##Students will be able to...
* Confidently write functions, then call them
* Explain what scope is
* Create a new local scope 
* Explain 'hoisting' in terms of load order


##Let's make a function!
```
function helloWorld(){
	alert("Hello, world");
}
```

there are 3 important parts to know:
1) the function keyword
2) the function name
3) the code block


Then we call (or "invoke") the function. The () are the important bits that tell the JavaScript engine to run the function. 


###Your task:
Write a simple function, exactly like the above, that alerts your favorite food, then call it.


##Let's make a better function!

Some functions need to be provided with information in order to achieve a particular task. If you wanted to write a function that calculates the area of a square, *what would you need to provide that function?*

Let's look at an example of providing information to a function:

function sayHello(name){
	console.log("Hello " + name);
}

###Your task
1) Write a function that calculates the area of a square. Think - what info will it need? What will it do with this info?

2) Write a function that accepts two parameters - name and age. When called, you want the function to alert a message that introduces yourself and says how old you are (e.g. "I'm John, I am 101 years old")

##Another way to write a function:
var sayHello = function(){
	alert("hello")
}

You will see this, but we prefer the other way, k?

## What the flip is 'scope'?!
Scope is simply the set of variables, objects, and functions that you have access to, at any point in your code.

## So what is 'global' scope?
If a variable has global scope, it means that it can be accessed globally - i.e. all other scripts and functions on the page can access it. 

* TASK ONE<br>Delete your work in repl.it so far. In pairs, define a variable called "favoriteColor", and set it equal to green. Then write a function called showColor, that console logs it. Call the function and see if it works. 

This variable called favoriteColor that we just defined has GLOBAL scope. It can be accessed from anywhere on the page. We just console logged it from inside the function, but we can console log it from ANYWHERE. Try console logging it from outside the function. 

What happens if we leave the 'var' keyword out?<br>
The browser assumes that it is a global variable. For that reason, whenever we define a new variable, we always put 'var' first. We don't want a lot of global variables if we don't need them. 

* TASK TWO<br>Inside your showColor function, define a new variable called secondFavoriteColor and set it to red. Try console logging it from within the function, and then try console logging it from outside the function. What happens?

## What is 'local' scope?
Local scope is anything that is smaller than the global scope. We create a new local scope by making a function. 

What will be logged in each of these cases?

```javascript
function showNumber() {
    var a = 10;
    if(a > 5) {
        a = 7;
    }
    console.log(a);
}

showNumber()

// 7? 10? Or something else?
```


```javascript
function showNumber() {
    if(10 > 8) {
        var a = 5;
    }
    console.log(a);
}
<!-- a new scope is ONLY made by a function -->
showNumber()

// 5? or 'undefined'
```
[only a function creates new scope!]


```javascript
var a = 5;

function first() {
    a = 6;
}

function second() {
    console.log(a);
}

first();
second();
<!-- 6 -->
// 5? 6? or something else?
```

```javascript
function first() {
    a = 3;
}

function second() {
    console.log(a);
}

first();
second();

// 3? or undefined?
```


```javascript
var a = 5;

function showNumber() {
    var a = 7;
    console.log(a);
}

showNumber();

// 5? 7? or undefined?
```

```javascript
var num = 1;

function first(){
	console.log(num)
	num = 2;

	function second(){
		console.log(num);
	}
	second();
}

first();
<!-- 1,2 -->
// 1,2? 2,1? or something else?
```

```javscript
var cat = "tom"

function showAnimals(){
	var mouse = "jerry";
	console.log(cat);
}

showAnimals()
console.log(mouse);
<!-- tom, error-mouse is not defined -->
// tom, jerry? jerry, tom? Or something else?
```


```javascript
var a = 6;

function first() {
    var a = 7;
    function second() {
        var a = 8;
        console.log(a);  
    }
    second();
    console.log(a);  
}

first();
​console.log(a);​  
<!-- 8,7,6 -->
//8,7,6? 6,7,8? 7,8,6? 7,6,8? or something else?
```


## Ok, so now what is hoisting?
Have you ever had errors because your javscript loaded stuff in the wrong order?

```
console.log(bestAnimal);
var bestAnimal = "dog";
```
This happens ALL THE TIME!

If we understand hoisting, we don't need to worry as much about load order.


### variable hoisting

``` 
var city = "Los Angeles"
console.log(city)
```

```
var city = "Los Angeles"

function showCity(){
	console.log(city);
}

showCity();
```

```
var city = "Los Angeles";

function showCity(){
	console.log(city);
	var city = "New York";
}

showCity();

// HOLY MACKEREL! WHY IS THIS SILLINESS HAPPENING?!
```

Before any javscript is executed, the compiler searches through your code, finds any variables, and effectively 'hoists' them to the top of the current scope. However, ONLY the declaration is hoisted, not the actual assignment!
After that, it searches through and finds all the function declarations and hoists them to the top too. 

This is why we rarely use function expressions:

```
// this is the sucky way of doing it
double(5)

var double = function(number){
	return number*2
}


```

and instead we use function declarations:
```
//this is the cool way of doing it
double(5)

function double(number){
	return number*2
}
```

## Your tasks:
* Why does this code not work? http://repl.it/mVA/4
Please fix it.
* Change showCar to a function declaration so that it will work.
* Explain why this code outputs the way it does http://repl.it/mVA/1
* How is this code different, and why does it not work? http://repl.it/mVA/2
* Why does this not work? http://repl.it/mVA/5
* This one seems broken too, how can we fix it? http://repl.it/mVA/6
* Arg! I keep getting errors! Why does line 8 not work here? http://repl.it/mVA/7
* Explain why the animal variable sometimes refers to the gorilla, and sometimes refers to the puppy http://repl.it/mVA/8
* remove a single word from the previous code so that the puppy waves, not the gorilla. 

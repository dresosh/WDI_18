#JS Name-Picker Lab (part 1)
---

Today we are going to lay down the groundwork for making a cool and simple front end app that randomly picks a string from an array. We can use this as a random name picker during class! It will be built in Javascript, HTML and CSS. 


## Setup

1. Make a new directory for this project

	`$ mkdir namepicker`
	
	`$ cd namepicker`

2. Make three files (index.html, main.js, style.css) 

	`$ touch index.html` 
	
	`$ touch main.js` 
	
	`$ touch style.css` 
	
4. Build the html basics and connect your JS, and CSS files

	```
	<!DOCTYPE html>
	<html>
		<head>
			<title>Name Picker</title>
			<link rel="stylesheet" type="text/css" href="style.css">
			<script type="text/javascript" src="main.js"></script>
		</head>
		<body>
			<h1>Name Picker</h1>
		</body>
	</html>
	```

## Before we get going - lets git going (optional)

1. Initialize git in the directory of your project (more on this monday, if you do not feel comfortable using git yet - you can skip all the steps on git)

	`$ git init`
2. Add + commit your new files

	`$ git add -A (or git add .)`	
	`$ git commit -m "initial commit"`
	
3. Create a remote repo on github and connect it to your local repo

	` $ git remote add origin (SSH key)`

4. Push everything up to github

	`$ git push -u origin master`


##In your JS file:
	

1. Make an array of strings (or use this one)

	```
	var wdi_18_names = ["Adam", "Alex", "Andre", "Brian", "Greg", "Jeff", "Julie", "Kayla", "Kyle", "Leslie","Noah", "Paul", "Percival", "Steve"];

	```

2. Load the `index.html` file in your browser 


##In the browser:
> `alt + command + j ` for the JS console

1. Make sure that the JS file is linked by searching for the `wdi_18_names` variable within the console. 

3. `console.log` **the first** string from that array
	 
	```javascript
	console.log(wdi_18_names[0]); //this returns the first string from the array (at index position 0)
	```

3. `console.log` **a different** string from that array

##Back in the JS file
> Remember! Each time you make a change to your JS file, you will need to save + refresh the browser. 

1. Create a FOR loop that `console.log` **all strings** from that array

	```
	var i;
	for (i = 0; i < wdi_18_names.length; i++) { 
	    console.log(wdi_18_names[i]);
	}
	
	// the loop logs each string in the array
	// notice the difference between this, and just logging the whole wdi_18_names array

	```
	
	Reload the browser to see if it works 


2. create a FUNCTION "eachName" that `console.log` **each** string **individually** from that array. 

	```
	    var i = 0;
	    function eachName(){
	      console.log(wdi_18_names[i]);
	      i++;
	    }
	```
	
	when you call `eachName()` it will return a different name every time
	
3. Research the JS  Math methods `floor` and `random`. Use these methods to design some logic that randomly logs a different string each time

	```
	var pick = Math.floor(Math.random() * wdi_18_names.length)
	var namePicker = wdi_18_names[pick];
	console.log(namePicker);


	//REFACTORED
	var namePicker = wdi_18_names[Math.floor(Math.random() * wdi_18_names.length)];
	console.log(namePicker);

	```

4. Use this logic within your `function eachName`

	Now when you call `eachName()` it should return a random name from the array	
	
	```
	    function eachName(){
	    	var namePicker = wdi_18_names[Math.floor(Math.random() * wdi_18_names.length)];
			console.log(namePicker);
	    }
	    
	```
5. Clean up your JS so you are just left with the `wdi_18_names` array, and the modified `eachName` function.


##Git add + commit (optional)

> Make that git commit message count! 


```

$ git add -p 
$ git commit -m "builds javascript logic"
$ git push origin master


```


##BONUS CHALLENGE ADD ON

Good stuff. Now we have an HTML document, linked to a JS file, upon load we can interact with all this JS in the **console**. In part two tomorrow, we will look at setting up our DOM manipulations so that we can call our eachName function **from the browser window**, and output the result of this function back **to the window**. 

As a challenge add on for today, if the above seems easy, consider including the following refinements to your logic:

* Each name is picked only once, until all names have been picked
* Once all names have been picked to restart the whole cycle without using a page reload. 



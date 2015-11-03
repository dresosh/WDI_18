#JS Name-Picker Lab (part 2)
------


Yesterday we got all the **logic** working, for picking a random name from an array. This is great work, but not very useful so far because nothing is being displayed in the browser. Only in the **console**. 

The next step is to setup a two way path (aka DOM manipulation) between the window and the console.

Browser window => Console (to trigger the function `eachName` (Like a button or something))

Console => Browser Window (to output the result of the `eachName` function, so that the chosen name is displayed in the browser.   



##Browser window => Console 

1. Create a button in HTML

	```
	<button> </button>

	```


2. How can you use that button to call a function?

	Turns out there are a couple ways. You can do this from both the HTML and JS sides. 
	

	```
	In HTML5 you can use this code in your HTML elements:
	
	onclick="alert('Hello world!')"
	
	onclick="myScript()"

	```
	
	The above method is **not** considered best practice. We should consider separation of concerns; Javascript should handle our behaviour. Using the above method we are adding behaviour to our HTML. 
	
	A better way of doing this:
	
	 
	```
	document.querySelector("#example").addEventListener("click", myScript);
	
	```
	
	Take a moment to consider the advantages / disadvantages.


3. Use this to call the function `eachName()`

4. Hook everything up so that your button is now printing a random string to the console. 


##Git add + commit (optional)

> Make that git commit message count! 

`$ git add -p `

` $ git commit -m "button prints string to console"` 


##Console => Browser Window

1. Write to the DOM. We want the name to render in our DOM - not just in the console!! Use `document.write` to get started


	```

	    function eachName(){	    
	    	var namePicker = wdi_18_names[Math.floor(Math.random() * wdi_18_names.length)];
			console.log(namePicker);
			document.write(namePicker);

	    }
	
	
	```

	document.write is super basic. It is also considered bad practice. Please take a moment to research other methods that we can use to print to the DOM. 
	
	

##Styling it out

You know what you have to do here! 



##BONUS CHALLENGE ADD ON!!

1. Render a photo of the person who's name is picked
2. CSS Animations! 
3. Bling!!


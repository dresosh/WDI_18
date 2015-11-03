# 8.2 - Intermediate jQuery

## Roadmap


#### SWBAT:
- Describe Event Bubbling, Delegation and how to bind events with jQuery
- Apply jQuery to manipulate, add and remove DOM elements
- Add event listeners for standard events that happen within the runtime environment
- Capture data from specific events and iterate or manipulate the data
- Prevent the default handler of events



## 8.2.1 - Event listeners - 10 min

We've been doing event listeners... they looked like this:

```
document.getElementById( "someId" )[ 0 ].addEventListener( "click", function () {
	// Do Something
})
```

Now they look like this:

```
$( "#someId" ).on( "click", funciton () {
	// Do Something
})
```


> **(10 min) CFU:** Build an input that alerts "Success!!" when the word "alert" is completely typed in. [**EXERCISE_1**]()


> `$("input#id").on( "keyup", function () {});`

## 8.2.2 - Event Bubbling - 5 min

> **(3 min) CFU:** - Look Up 'Event Bubbling'

[DEMO](http://codepen.io/relicmelex/pen/qdzEaJ?editors=101)

```html
<section class="theSection">
	<div class="button">Button One</div>
</setion>
<ul class="list">
	<li>Something Here</li>
	<li> <div class="button">Button Two</div></li>
</ul>
	
jQuery
$(".button").on("click", function () {
	console.log(this);
})
```

> **(Immediate) CFU:** Bubbling fist to 5


## 8.2.3 - Event Delegation - 15 min

> **(3 min) CFU:** Look up event delegation

[DEMO](http://codepen.io/relicmelex/pen/oXrgOv?editors=101)

#### 10 min Practice event listeners & delegation (Task on projector)


## 8.2.4 - Manipulating the DOM - 15 min

jQuery DOM Manipulation

Grabbing the innerHTML of an element:<br />
`var elemInnerHTML = $( "#someID .someClass" ).html()`

Adding to the DOM:<br />
`$( "#someID .someClass" ).html("<div class='newClass'></div>")`

Removing an element:<br />
`$( "#someID .someClass" ).remove()`

> **(10 min) CFU:** Go try it, DOM manipulation. Build a list of foods, and next to it a list of soft drinks dynamically based on the two following array's into the associated HTML.

[**EXERCISE_2**]()

```
- JavaScript -
var foods = [ "Burger", "Pizza", "Curry Chicken", "Salad"],
	drinks = [ "Coca Cola", "Pepsi", "Mt. Dew", "Sprit" ];


- html - 
<section class="foodsAndDrinks">
	<ul id="drinks">
	</ul>
	<ul id="foods">
	</ul>
</section>
```


## 8.2.5 - The event Object (even more with events) - 15 min

#### Preventing defaults (default events) - 5 min
	// Description: Prevents the default event
	e.preventDefault()
	
#### Stop the bubbling
	// Description: Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
	..., function ( e ) {
		e.stopPropagation()
		$( this ).attr("id");
	})


#### 10 min CFU
[**EXERCISE 3**]()


# Lab time
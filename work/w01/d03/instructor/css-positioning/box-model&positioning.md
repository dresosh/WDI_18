# Box Model & Positioning


### Learning Objectives

* Intro
* The Box Model
	* Margin
	* Border
	* Padding
	* Content
	* North/East/South/West
* Static Positioning
* Position: Relative
* Position: Absolute
* Columns
* Floats
* Floats with Clears


##Intro

(2 minutes)
Connection to Long Term Learning Goals

In future we will be using libraries to dial in a lot of our positioning. It is important to get a grasp of what is going on under the hood

This is an example of such a library: [Extra Strenght Responsive Grids](http://dfcb.github.io/extra-strength-responsive-grids/)



## CSS Positioning

####Directions: 

1. Create an html page called ```index.html``` with an externally linked css stylesheet called ```main.css```
2. Inside your html page create a "container" div holding four divs within.
3. Inside our CSS page, make the container a 500px gray square containing 100px squares within that are red, blue, green, and black.
<br>


####Deliverable: 


```html
<div id="container">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
</div>
```

```css
#container {
    height: 500px;
    width: 500px;
    background-color: gray;
}
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
}
#square2 {
    background-color: blue;
    height: 100px;
    width: 100px;
}
#square3 {
    background-color: green;
    height: 100px;
    width: 100px;
}
#square4 {
    background-color: black;
    height: 100px;
    width: 100px;
}
```


---


##Box Model, Borders, Padding and more...
 

*Explain* the CSS Box Model 

- Every element in web design is a rectangle. 
- Even if you see a circle, it's living within a box.

*Show* the class that this is true by opening up your Chrome Dev Tools and navigating to the Box Model viewer under Elements.

- **Show** the class what happens when we drop this code into our CSS file:



```css
* {
    border: 1px solid red !important;
} 
```

*Explain* how the box model affects CSS positioning
*Show* the class how you can change the padding, border, and margin of one of our boxes

All right! Now that you know all about CSS, it's time to learn the last (but certainly not least) major piece of the puzzle: positioning.

Controlling the position of HTML elements allows you incredibly fine control over how your pages look. No longer will your ```<div>s``` sit directly on top of one another! (Unless you want them to.)

<br>
<strong>What does the skeleton of an html element look like?</strong>
<div>
			<h3>The Box Model</h3>
			<img src="http://s3.amazonaws.com/codecademy-blog/assets/ae09140c.png"/>
</div>


####Add a border to all your elements 
```
* 
{
	border: 1px dashed blue;
}
```

##Margin Property

The margin is the space around the element. The larger the margin, the more space between our element and the elements around it. We can adjust the margin to move our HTML elements closer to or farther from each other.

Let's start with our margins. Adjusting our margins not only moves our element relative to other elements on the page, but also relative to the "walls" of the HTML document.

For instance, if we take an HTML element with a specific width (such as our ```<div>``` in the editor) and set its margin to auto, this tells the document to automatically put equal left and right margins on our element, centering it on the page.

If you want to specify a particular margin, you can do it like this:

margin-top: /*some value*/
<br>
margin-right: /*some value*/
<br>
margin-bottom: /*some value*/
<br>
margin-left: /*some-value*/
<br>
<br>
You can also set an element's margins all at once: you just start from the top margin and go around clockwise (going from top to right to bottom to left). For instance,

`margin: 1px 2px 3px 4px;`

You can also do top-bottom and side side

`margin: 0 auto;`

##Border Property
The border is the edge of the element. It's what we've been making visible every time we set the border property.

Borders can be set in two ways, just like your margins. 

Lets add some thick borders to our ```<div>'s```

##Padding Property
The padding is the spacing between the content and the border. We can adjust this value with CSS to move the border closer to or farther from the content.

Padding can be set in two ways, just like your margins. 

Lets add some padding to our ```<div>'s```

####Did anyone notice what just happened?

##Content
The content is the actual "stuff" in the box. If we're talking about a <p>element, the "stuff" is the text of the paragraph.


##Taking Up Space using Display:
Cool, right? Each HTML element gets its own box to live in.

As you saw, the outermost box of each element went all the way across the page. This is why until now, your HTML elements have been sitting on top of one another: by default, they take up the full width of the page.

We can change all this with the first positioning property we'll learn: the <b>display:</b> property. We'll learn about four possible values.




block elements: p h1 ul ol li and divs

inline elements: a input span

inline-block: img



```block:``` This makes the element a block box. It won't let anything sit next to it on the page! It takes up the full width.

```inline-block:``` This makes the element a block box, but will allow other elements to sit next to it on the same line.

```inline:``` This makes the element sit on the same line as another element, but without formatting it like a block. It only takes up as much width as it needs (not the whole line). Inline places all your elements on a single line. The bad news is that it doesn't maintain their "box"ness. Inline elements cannot have a width and height.

```none:``` This makes the element and its content disappear from the page entirely!

####Change the display property to inline-block
```
div{
	display:inline-block;
}
```

####Class, what would be a good example of when we need to use inline??
---

## Static Positioning 


####Directions: 

*Explain* the default positioning for all elements is static. 
- This means that no positioning has been applied and the elements occurs where they normally would in the document.

```css
background-color: gray;
    position: static;
    height: 500px;
    width: 500px;
```

You rarely explicitly declare `position:static` like this because it is the default.


<br><br>

---

##Position: Relative 

####Directions: 
*Explain* that declaring `position:relative` allows you to position the element top, bottom, left, or right relative to where it would normally occur.

```css
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
    position:relative;
    top: 0;
    left: 40px; 
}
```
<br><br>

---

##Position: Absolute 

####Directions:

*Explain:* Specifying `position:absolute` removes the element from the document and places it exactly where you tell it to be.

```css
#square1 {
    background-color: red;
    height: 100px;
    width: 100px;
    position:absolute;
    top: 0;
    right: 0; 
}
```
<br><br>



## Columns

####Directions: 

*Explain* Now that we have the basics of relative and absolute positioning lets create a two column layout by changing the heights of `square1` and `square2` to 200px and absolutely position the two squares like so:

```css
#container {
    background-color: gray;
    position: relative;
    height: 500px;
    width: 500px; 
}
#square1 {
    background-color: red;
    height: 200px;
    width: 100px;
    position:absolute;
    top: 0;
    right: 0; 
}
#square2 {
    background-color: blue;
    height: 200px;
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
}
```

**Note** how our "square2" div is positioned to the top left of the container and "square1" to the top right. This was done to illustrate that absolute positioning doesn't care what order the elements appear in your html. 

Also, notice how we can't see square3 or square4? They are being covered up by our absolute-positioned "square2" div (remember absolute positioning removes the element from the document).

We can reveal those missing divs by declaring their absolute position in the bottom left and right of our container:

```css
#square3 {
    background-color: green;
    height: 100px;
    width: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
}
#square4 {
    background-color: black;
    height: 100px;
    width: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
}
```

**Point Out:** This works fine when we know the exact sizes of our elements but what if we were building something like a blog and we had text in those columns or surrounding them, we won't always know the exact amount of text or their font sizes. This is where floats can help us.

<br><br>

---

##Floats

####Directions: 
*Explain* If our element sizes are variable or dynamic we can use floats to allow text/other elements to wrap around the floated element.

####Directions to students: 
- To illustrate lets first go to a [favorite ipsum generator](http://http://baconipsum.com) and grab 4 paragraphs of text.
- Now let's venture back to our html page and add this text after the closing tag of our "square2" div and before the opening tag of our "square3" div.

- Your html should like this:
    
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
    <div id="container">
        <div id="square1"></div>
        <div id="square2"></div>    
        (4 paragraphs of ipsum)
        <div id="square3"></div>
        <div id="square4"></div>
    </div>
</body>
</html>
```

- As expected our text falls behind our absolute positioned columns? Now lets make our elements aware of each other with floats. 

- Back in our CSS remove the absolute positioning from our "square2" div and replace it with `float:left` .

    
```css
#square2 {
    background-color: blue;
    height: 200px;
    width: 100px;
    float: left;
}
```

**Note:** Our text is aware that our "square2" div wants to be as left as possible and kindly wraps it in a nice text hug.

<br>

---

##Floats with Clears

####Directions: 
*Explain:* While floats make other elements aware of their location and get text hugs, clears make other elements aware and are told not to touch.

####Directions to students: 
- Lets go back to our CSS and change our "square2" div's positioning from `float:left` to `clear: right`.
    - Clear is saying "I'm not sure how much space I'm going to take but whatever it is clear off my right side" so our text respects its wishes and drops to the line below.
    
<br>
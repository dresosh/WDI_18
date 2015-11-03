#CSS SELECTORS AND BASIC STYLING

##SWBAT

- Explain what CSS is, and why we separate from HTML

- Set up a basic HTML/CSS skeleton app

- Style specific elements by selecting classes and ids

- Explain selector specificity

- Use CSS Reset or CSS Normalize on all your client-side projects


##Starter task
5 mins in your groups - EVERYTHING you already know about CSS on the walls. 
Do it! But.... only one person in each group can write at a time. 



##Questions
* What is CSS?

http://www.csszengarden.com/

* But why is it called "cascading"?!

This is from Stack Overflow:

----

"Cascading" in this context means that because more than one stylesheet rule could apply to a particular piece of HTML, there has to be a known way of determining which specific stylesheet rule applies to which piece of HTML.

The rule used is chosen by cascading down from the more general rules to the specific rule required. The most specific rule is chosen.

----


So for example I could say...

"Everybody put your right hand palm down on the table"

(this rule is not very specific - it applies to everyone)


Then I might say - If you are male, make your right hand into a fist.

(The second rule is clearly more specific)


Then I might say to a single person - give me the thumbs up with your right hand!

(this is clearly the most specific rule)


## Let's make an app... using the terminal.... and pair programming

https://www.youtube.com/watch?v=dYBjVTMUQY0

1) Create a folder called "css_awesome"

2) Inside this folder, create a file called "index.html" 

3) Also inside this folder, create a file called "styles.css"

4) Open the folder in sublime (using a terminal command)

5) In your index.html, simply type html, then press tab... hopefully some magic should happen.

6) Give your app a title

7) Inside the body element, make an h1 tag that says "Hello, world"


## Let's add CSS together

One place we could write it is directly into our html element. This is not cool though.

<h1 style="color: red;">Hello, world</h1>

We want to 'extract' our presentation somehow. Another place we could do it is inside style tags, inside the HEAD element of our webpage. 

```
<!DOCTYPE html>
<html>
<head>
	<title>TITLE</title>
	<style>
		h1 {
			color: red;
		} 
	</style>
</head>
<body>

<h1>Hello, world</h1>

</body>
</html>
```


Notice that we first SELECT the element we want to do something to, then we write the property we want to change, and then the value that we want the property to have.

Still, this is NOT COOL. 

The best way to impress people and make new coding friends is to completely extract all your CSS out to a separate 'stylesheet'. Luckily, we've already created a separate stylesheet!

lets move our CSS to that stylesheet:

```
h1 {
	color: red;
} 
```

Now we have a new problem - we need to link to this stylesheet from our index.html.

Let's link it up, and check it works.

Make a "p" tag with your name and dream job. 

Let's muck about with some classes.

```
In our CSS, we grab classes using the dot "."

We can use a class multiple times in our html.

It is more specific that just referring to a tag, so it "wins" when rules compete.

What happens when two class rules compete?
```

## Using classes and ids

###Task
1. Make the same file structure again from the terminal, with the index.html and styles.css files linked

2. Now make an unordered HTML list of the following animals:  

- mouse  
- canary  
- penguin  
- salmon  
- cat  
- goldfish  
- dog  
- sheep  
- parakeet  
- tuna  

3. Using classes, make all the mammals red, all the birds blue, and all the fish orange.


###Using ids

Let's give the mouse an id of mouse:

```
html
<li class="mammal" id="mouse">mouse</li>
```

now we can refer to it in our CSS using the "#" sign:

```
#mouse { 
	background-color: purple;
}

```

### How do we combine tags, classes, and ids?

What is the difference between these two samples of CSS?

```
.mammal {
	color: pink;
}


li.mammal {
	color: pink
}
```

Which is more specific?

You will see the second kind of CSS every now and again. However, it is not best practice. Generally we want to select any element with a given class, not just one type of element. 

---

Let's take a look at another example of combining selectors:

```
HTML:

<div class="best-food">
	<p>Burritos</p>
	<p>Tacos</p>
	<p class="burgers">Burgers</p>
</div>
```

```
CSS:

.best-food {
	background: brown;
}

.best-food .burgers {
	background: pink;
}
```

This is called a DESCENDENT SELECTOR. The second CSS code snippet is selecting all elements with a class of "burger" that reside INSIDE elements with a class of best-food.

---

What about when we have the ">" sign in our CSS?

```
.best-food .burgers {
	background: pink;
}

.best-food > .burgers {
	background: pink;
}

```

What is the difference between these two?

The first example selects all elements with the class of .burger that are WITHIN elements with the class of .best-food;


The second example selects all elements with the class of .burger that are DIRECT DESCENDENTS of elements with the class of .best-food;


## font-weight, font-style, text-decoration, border properties
Continue to work on your file so that...

- the mammals are bold
- the birds are italic
- the fish are underlined.


##pseudo-classes
Woah. What is a pseudo-class? A CSS pseudo-class is a keyword added to selectors that specifies a special state of the element to be selected. 

For example :hover will apply a style when the user hovers over the element specified by the selector

Here are some cool pseudo-classes:

```
:hover
:active (for links)
:visited (also for links)
:focus (mainly used in forms to tell you when something is ready for keyboard input)

```

## Last thing! CSS reset and CSS normalize

You can download it here:
http://necolas.github.io/normalize.css/

OR... you can just link to a version of it on the internet. Thanks internet!
http://cdnjs.com/libraries/normalize






<!-- Instructor: $ cd w01/d02/samples/ && source setup.sh -->
# WDI 2.1 - Morning - Intro to HTML ( The Basics )
--
### Roadmap

| **Section**          | **Timing** 	|        **Summary**                  |
|----------------------|------------	|-------------------------------------|
| Morning (Objectives)	| 5 min     	| Intro to HTML                       |
| I Do             		| 10 min     	| 2.1.1 - Standard Markup             |
| We Do            		| 10 min    	| 2.1.2 - Common Tags & Attributes    |
| I Do             		| 5 min     	| 2.1.3 - Lists (ordered & unordered) |
| We Do					| 10 min    	| 2.1.4 - Inputs                      |
| I Do						| 10 min    	| 2.1.5 - New symantic HTML5 tags     |
| I do						| 5 min		| 2.1.6 - Code Style Guides           |
| Bonus					| 5 min		| 2.1.7 - Markdown                    |
| **LAB**					| 15 min    	| 2.1.8 - LAB: Blog                   |

### Objectives (SWBAT):
 - Build a basic static HTML webpage from scratch to be rendered as a document in the browser
 - Use HTML5 structural elements & Identify common HTML elements and write with correct syntax
 - Assign attributes to elements
 - Load external Stylesheets (CSS) and JavaScript files
 - Build a form with different types of inputs
 - Explore and use a markup language standard library and built-in functions (learn & use new semantic elements)
 - Understand a code style guide
 - Correctly indent content according to document hierarchy


## 2.1.1 - Standard markup - 10 min
#### HTML tags

HTML tags are style with greater than and less than signs like: `<` `>` We open and close them like so`<p></p>`

**CFU: Give me 5 HTML Tags: one at a time...**

--
#### PAUSE 2 Min
--
<br />

- HTML: Hypertext Markup Language: *a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.*
- DOCTYPE:
- The text between `<html>` and `</html>` describes an HTML document(W3Schools)
- The text between `<head>` and `</head>` provides information about the document (W3Schools)
	- The text between `<title>` and `</title>` provides a title for the document (W3Schools)
- The text between `<body>` and `</body>` describes the visible page content (W3Schools)
- The text between `<script>` and `</script>` is for a logic based interpreted computer langauge like javascript for interacting with the browser. (Or loaded via src attribute)
- External styles are defined in an external CSS file, and then linked to in the <head> section of an HTML page using the `<link />` tag (W3Schools)
- Internal styling is defined in the <head> section of an HTML page, using a `<style> `element (W3Schools)

```html
- <!DOCTYPE html>
- <html></html>
- <head></head>
- <title></title>
- <body></body>
- <style></style>
```

#### Linking / including / importing
- HTML is just getting imports for complex templates, but for now it has the `<link>` and `<script>` tags. Lets include some external CSS and JS in our document.
**Example**

```html
<link rel="stylesheet" href="" />
<link rel="import" href="/imports/file.html" />
<script src="/domain/main"></script>
```

#### Nesting
- When an element contains another element, the contained element is considered to be nested inside the outer element. In the HTML snippet below, the `<title>` element is nested inside of the `<head>` element.
It is a good practice to indent nested elements. However, the `<head>`, and `<body>` tags are rarely indented despite being children of the `<html>` element.
Nested Relationships:
	- Descendant / Ancestor
		An element is considered a descendant if it is nested anywhere within its ancestor.
	- Child / Parent
		An element is considered a child if it is a direct descendant of its parent.
	- Siblings
		Two or more elements are considered siblings if they have the same parent.

**Example:**

```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<link rel=''/>
	</head>
	<body>
		<script src=""></script>
	</body>
</html>
```


## 2.1.2 - Common Tags & Attributes - 10 min
#### Common Tags:
| Type 		| Tag						| Description                       |
|------------	|----------------------	|-----------------------------------|
| Headers 	| `<h1>` `<h2>` `<h3>`	| format header text
| Paragraph	| `<p>`					| formatting paragraph text
| Active  	| `<a>`					| linking or actions (usually a CTA)
| Image 		| `<img src="">` 		| includes an image
| Inline 		| `<span>` 				| inline text formatting
| Block 		| `<div>`					| block text

#### Span & Div
`<span>` and `<div>` elements are used to define parts of a document so that they are identifiable when no other HTML element is suitable. Where no existing HTML element is applicable, span and div can valuably represent parts of a document so that HTML attributes such as class or id can be applied.

#### All together

```html
<body>
	<h1>Hello World!</h1>
	<p>
		Paragraph
	</p>
	<span class="redText">small text</span>	<img src="profile.jpg" />
	<div>
		Block Stuff & Text
		Linking text to a <a href="">machine</a>
	</div>
</body>
```

#### Attributes:
**Elements may contain Attributes.**<br />

- Attributes provide additional information about an element.
 - Attributes are typically name/value pairs separated by an equals sign inside the opening tag and the value should always be put in quotes.
 	- For example: <div class="my-class">My Content</div>
- There are a few attributes, such as required checked novalidate and disabled, that stand alone without a value - these are called boolean attributes.
- You can add your own custom attributes too! The HTML5 spec recommends that you prefix them with data-.
- You will see custom attributes heavily utilized when we learn AngularJS.
- The most common attribute is class.
- The id attribute is used to target a specific element (or its contents) for JS selection. The value of an id attribute must be unique in the document. (WC's change this, with the shadowDOM)
- They are optional and should be used only if necessary - remember, the less we clutter our code, the better.
- **HREF:**
<br />

### We Do (Save a file):
Lets make a hello world file that shows our name in big bold text and a sub heading of 'Biography' and then a quick little paragraph about yourself.

`$ mkdir classPractice && cd classPractice && subl index.html;`

**CFU: What might this look like? Practice:**

<!-- index.html

<head><title>Hello World!</title></head>
	<body>
	<h1>Eric Hodonsky</h1>
	<h2>Biography</h2>
	<p class="context">
		Biography goes here
	</p>
</body>
-->
--
#### PAUSE: 2min
--
<br />

#### Comments:
You can add comments to an HTML document by placing the text inside of a comment tag using the following syntax:

```html
<!-- This is a comment -->
```

Comments can span multiple lines and elements, or anything else for that matter, in a comment tag will not be rendered.

## 2.1.3 - Lists (vertical only till css) - 5 min

- Unordered List `<ul>`
- Ordered List `<ol>`
- List Elements `<li>`

 **Example:**

 ```html
 	<ul>
 		<li>Item 1</li>
 		<li>Item 2</li>
 	</ul>
 	<ol>
 		<li>ItemA</li>
 		<li>ItemB</li>
 	</ol>
 ```


**< Write on desk a list of groceries >**

## 2.1.4 -  Inputs - 10 min
So there are 20+ types of inputs... Why so many and why are they different?
For large format (Laptop/Desktop) input won't matter, however for mobile devices or smaller screens, the on-screen keyboard only has so much realestate.
So the types change what 'view' is set for the on-screen keyboard. For example type `tel` gives just a telephone pad (numbers) on-screen

- [More HTML input types](http://www.w3schools.com/html/html_form_input_types.asp)

- Inputs... they need labels. It's bad form to wrap a label around an input. Use the input's ID to attach a label to it.

```html
<label for="forId">Text Input</label>
<input id="forId" type="text" />
<textarea></textarea>
<input type="password" />
<input type="radio" name="important" value="theVal"/>
<input type="checkbox" name="importantName" value="valTwo" />
<select name="">
	<option value="val">Name</option>
</select>
<input type="submit" name="submit" value="Submit" />
<input type="button" name="btnName" value="valUe" />
<input type="number" name="quantity" min="1" max="5" />
<input type="date" name="bday" />
<input type="tel" name="phoneNum" />
<input type="color" name="favcolor" />>
<input type="email" name="email" />
<input type="url" name="homepage" />
```


## 2.1.5 - New symantic HTML5 tags - 10 min

HTML5 has a lot of cool symantic built in tags, and pretty much all of the tags from before still exist. There's a lot of assumptions out there about HTML6, but don't believe the hype till the spec is agreed on!

- Semantic HTML helps express the meaning, or purpose, of the content in a webpage.
Benefits for the developer:
	- Semantic HTML makes the developer's intentions more clear as to what the developer is trying to accomplish.
- Benefits for the user:
	- More accurate web searches via better SEO (search engine optimization).
	- Improves accessibility for the vision impaired because screen readers can do their job better.

**< PAIR: research semantic tags, then discuss use of each >**
<br />
--
#### PAUSE 5 Min
--
Examples:

```html
<article>An article, or excerpt</article>
<canvas>Graphics & Physics tag</canvas>
<aside>
<figure>
<main>
<header>
	<nav></nav> // Navigation
</header>
<footer>&copy; Copywrite</footer>
<section>Piece of a page</section>
<datalist>
	<li></li>
	<li></li>
</datalist>
<video src="">HTML5 Video</video>
```

## 2.1.6 - Code Styleguide - 5 min
Coding style guides are important. It creates a code base that is easily entered, and manipulated, and after still digestable because you've kept to a stlye guide. We don't gode for ourselves.

- All code in any code-base should look like a single person typed it, no matter how many people contributed.
- "Arguments over style are pointless. There should be a style guide, and you should follow it" - Rebecca Murphey
- "Part of being a good steward to a successful project is realizing that writing code for yourself is a Bad Idea™. If thousands of people are using your code, then write your code for maximum clarity, not your personal preference of how to get clever within the spec." - Idan Gazit

**Googles HTML/CSS [StyleGuide](http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml)**
<br />
**Idiomatic's JavaScript [StyleGuide](https://github.com/rwaldron/idiomatic.js/)**

## 2.1.7 - Bonus MarkDown - 5 min
We use markdown... it's not super important.

```md
 h1 - # MarkDown
 h2 - ## MarkDown
 Link - [name](url:// )
 Image - ![alt](url:// )
```

## 2.1.8 - Lab Blog - 15 min
### You Do:
Write a HTML document that represents your own personal blog using semantic HTML. Focus on structure and include some sample content. Include attributes such as class and id, but do not worry about writing any styling.

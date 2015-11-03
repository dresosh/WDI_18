# SASS Lesson

### Objectives

* Be able to describe what a CSS preprocessor does and why it's useful
* Be able to use SASS’s 
	* nesting 
	* variables 
	* mixins

------

# What is a CSS preprocessor?
  - A scripting language that extends CSS and gets compiled into regular CSS syntax (in our case SASS)
  - You write your markup in SASS and then use a program to compile the language into regular CSS, which your browser is expecting to see. This step is important: You can’t drop a raw SASS file into your web page and expect it to work.
- Why use a CSS preprocessor?
  - Cleaner code (nesting,importing, etc.)
  - Cross-browser compatibility

#### PROS

- Modularity and portability
- Faster development times (instead of typing things out a million times you can define style in a function and apply them globally. The bigger a project gets the more you find yourself repeating code)

#### CONS

- You have to learn another language

------

#Setup

####1. Install the Sass gem

``` text
gem install sass
```

####2. Add Syntax Highlighting for SCSS

If using Sublime Text you can use [this package](https://github.com/P233/Syntax-highlighting-for-Sass) for syntax highlighting of scss. 

####3. The setup: Creating the file structure.

``` text
mkdir sass-lesson
cd sass-lesson
touch index.html && mkdir css
cd css && touch style.scss
cd ..
subl .
```

####4. In Terminal

```
$ pwd (to get the path to current directory)
(copy the absolute file path)
$ sass --watch /path/to/file
```

This will keep running in the background! Make sure you leave your terminal window open and running. If you need to use terminal, open a new tab or window. 

Every time you save a change to your SCSS, the watcher will trigger the compiler, style.css will be updated. The first time you run watch it will create a style.css file and a map file also. 


---

#Let's CODE some SASS

Boilerplate HTML: 

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/style.css">
    <title>Sass Lesson</title>
  </head>
  <body>
    <h1>This is a Header</h1>

    <section class="primero">
      <li>uno</li>
      <li>dos</li>
      <li>tres</li>
    </section>

    <section class="segundo">
      <li>cuatro</li>
      <li>cinco</li>
      <li>seis</li>
    </section>

    <section class="third">
      <li>siete</li>
      <li>ocho</li>
      <li>nueve</li>
    </section>
  </body>
</html>

```

- Challenge students to style the `primero` class as such:
  - background-color: pink
  - ***list items***:
    - font-size: 24px
    - color green


- Challenge students to style the list elements in the `segundo` class as such:
  - background-color: yellow


- ***list items*** 
  - font-size: 40px
  - color: blue

***CSS should look something like this:***

``` css
.primero {
  background-color: pink;
}
.primero li {
  font-size: 24px;
  color: green;
}
.segundo {
  background-color: yellow;
}
.segundo li {
  font-size: 40px;
  color: blue;
}
```



***LET’S SHOW THE STUDENTS NESTING WITH SASS!!!***



#### Setting up the watcher

``` text
pwd (to get the path to current directory)
sass --watch /path/to/file

>>> Sass is watching for changes. Press Ctrl-C to stop.
      write /Users/glenn/Desktop/v1-sass-class/css/style.css
      write /Users/glenn/Desktop/v1-sass-class/css/style.css.map
[Listen warning]:
  Listen will be polling for changes. Learn more at https://github.com/guard/listen#polling-fallback.
```

#### REWRITING THE CSS INTO SASS/NESTING

- Open up both the CSS and SCSS file side-by-side to show the students the changes being made.

``` css
.primero{
  background-color: pink;
  li{
    font-size: 24px;
    color: green;
  }
}

.segundo{
  background-color: yellow;
  li{
    font-size: 40px;
    color: blue;
  }
}
```

------

#### VARIABLES

- Show students how variables can be established and  used in the SASS file.

``` css
$primaryBackground: yellow;
$secondaryBackground: pink;

.primero{
  background-color: $primaryBackground;
  li{
    font-size: 24px;
    color: green;
  }
}

.segundo{
  background-color: $secondaryBackground;
  li{
    font-size: 40px;
    color: blue;
  }
}

```

- Challenge students to:
  - Add one more div (choose your own class name) with 3 list elements
  - Establish ONE variable named `$thirdColor `
  - Set the text color of all elements equal to `$thirdColor`
  - Make all list elements display `inline`



``` css
$primaryBackground: yellow;
$secondaryBackground: pink;
$thirdColor: red;

.primero {
  background-color: $primaryBackground;
  li {
    font-size: 24px;
    color: green;
  }
}
.segundo {
  background-color: $secondaryBackground;
  li {
    font-size: 40px;
    color: blue;
  }
}
.third{
  color: $thirdColor;
  li{
    display: inline;
  }
}
```

------

#### MIXINS

- Explain to students that I may want to pass a collection of styles instead of just one. For this we use mixins. The syntax is similar to a JavaScript function
- Explain that we are going to add a solid black border to our elements with rounded corners

``` css
@mixin roundedCorners(){
  border: 2px solid black;
  border-radius: 5px;
}
```

- Now explain that we are going to add variables to the mixin
- Explain the syntax
  - We must establish a default value
  - `primero` has the @includes statement with no arguments and the default value is passed
  - `segundo` and `third` have values passed, and the CSS is compiled with those values

``` css
$primaryBackground: yellow;
$secondaryBackground: pink;
$thirdColor: red;

@mixin roundedCorners($borderPixels:5px){
  border: 2px solid black;
  border-radius: $borderPixels;
}

.primero {
  @include roundedCorners;
  background-color: $primaryBackground;
  li {
    font-size: 24px;
    color: green;
  }
}
.segundo {
  @include roundedCorners(20px);
  background-color: $secondaryBackground;
  li {
    font-size: 40px;
    color: blue;
  }
}
.third{
  @include roundedCorners(50px);
  color: $thirdColor;
  li{
    display: inline;
  }
}
```





------

#### OPTIONAL

``` text
sass --watch /Users/glenn/Desktop/sass --style expanded
```

- Style options are
  - nested(default)
  - compact
  - compressed
  - expanded


- What is the `.map` file that gets created by watch?





### MVP FOR LESSON

- Explain what SASS is
- Explain why you would use SASS
- SASS nesting
- SASS variables
- SASS mixins

------

### LINKS

* completed code is found in this directory of the class repo 
* There is a Lab for further practice also included
* http://www.nosleepforsheep.com/development/using-a-css-preprocessor/
* go to codepen.io and search for SASS tags. Try clicking the "compile" button in the CSS tab

---

props to Glenn Harris @GA Los Angeles for this syntactically awesome markdown 



# 3.3 - JavaScript Object Literal

### Roadmap

| **Section**          	| **Timing** 	|        **Summary**                  
|----------------------	|------------	|---------------------
| Review 					| 5 min		| 3.3.1 - Review
| Encapsulation			| 20 min 		| 3.3.2 - Ecapsulation
| Objects					| 40 min		| 3.3.3 - Object Literals
| Mini-Lab						| 15 min		| 3.3.4 - Object 'ME'

**Objectives** *SWBAT:*

 - Describe encapsulation so they can apply it to objects
 - Use J.S. Objects to create reusable encapsulated code

## 3.3.1 - Review - 5 min

 - Variables (stores data)
 - functions (operates on data)

## 3.3.2 - Ecapsulation - 20 min
We're about to talk about encapsulation, what that means, and how it relates to objects in programming. Object Oriented programming can allow for much cleaner, easier to understand code, while also offering up things like polymorphism and inheritance which we'll cover later. These techniques bound with encapsulation can make for great abstraction and more digestible code

**< Think Pair Share (3min): Discuss 'encapsulation' in the real world >**

Paired answers - on the white board

### I DO - 10 min
Define `Encapsulation`:

 - Packing of data into a single component.
 - Encapsulation also can allow the programmer to restrict access to properties and methods that have been bundled to operate on the data. This is a bit more tricky with JS than most other languages, so we'll cover those specifics in another lesson.

Ideas for encapsulation?
- WB: Draw garden circle, give properties + methods (dirtType, location, waterLevel, hasWater, needsWater)
- WB: 'Tom' (who is Tom? What are his/her properties)
### We Do - 5 min
**< Draw & Share (whip around - 3 min): lets diagram a User together. >**

- Draw a user diagram on your desk of what you may want encapsulated within a user

<!-- Build user encapsulation on white board w/ responses-->
### You Do - 5 min
**< Define in your own words 'encapsulation' somewhere on the white board >**


## 3.3.3 - Objects 25 min
Segway from encapsulation:

What is a common term used to describe 'encapsulated' data and operations in programming?

### I Do - 10 min:
**Define `Object`: A way with code to referencing an encapsulation of methods and properties.**

- Objects encapsulation reduces collisions in variable names, and makes larger projects digestible.
- A Property is an association between a key and a value, and a method operates on data.
- Mutable vs Imutable properties (locking properties and objects in JS)
- Methods and properties are basically functions and variables that are explicitly part of the encapsulated code.
- JS has Object (function), Object (literal: what we're coving today), and ES6 is getting Object (class) as well. Something for later on...
	- Objects litterals are like a key-value stores version of an array
	- Object literal is a comma separated list of key-value pairs wrapped in curly braces. A value can be a method.

```javascript
var person = {
    age  :    23,  
    getAge: function(){
      return this.age;
    }
}
```
<!-- draw up an object literal -->
<!-- note the use of the keyword 'new' will throw an error -->


<!-- reusability / inheritance, you can re-use or point to the same variable or object but not copy. copy by reference -->

### I Do - 10 min

#### Looking at Object Properties & Methods

```JS
var movie = { 
		title: "Ex-Machina" , 
		director: "Alex Garland", 
		actors: ["Alicia Vikander","Domhnall Gleeson","Oscar Isaac"]
	};

// Access to properties via dot (.) notation
console.log( movie.title );

// Access to properties via bracket(["key"]) notation
console.log( movie["title"] );

// Get all properties/methods and values
for(var key in movie){
   console.log("key: " + key + "   value: " + movie[key]);
}   

//you can also do this
var keys = Object.keys(movie);
for (var i = 0; i < keys.length; i++) {
	var val = movie[keys[i]];
	console.log("key: " + key + "   value: " + movie[key]);
}
```

- Also if you can't enumerate over them, you can still get a list of properties via:

```js
Object.getOwnPropertyNames();
```

#### Locking properties on an object literal
Is it always so easy to do this...add and remove properties for an object literal on a whim? More importantly...do we always want the ability to do this? Are there times when we want to lock down an object so to speak..and prevent these types of runtime modifications? It turns out that javascripts dynamic nature can make it unweildy at times, and that it's nice to has the ability to prevent our object literals from being tampered with.

First, let's take note of the three attributes we can use to control the accessibility of our objects properties

- Writable - Can we write the property...in other words can we set it after creation?
- Enumerable - Can we list out our objects properties, like we did in the for(key in movie) loop?
- Configurable - Are the attributes of the property modifiable?

```JavaScript
//pass the object as the first parameter and the prop name as the second
var moviePropValues = Object.getOwnPropertyDescriptor(movie,"title");
```
We can see that the 'title' property has four attributes associated with it: a value, and three we talked about above that control access to the property. We can see that all of these access properties are true, which may or may not be desirable depending on the context.

To construct objects and define their properties, we have to essentially pass a spec of what we want the values of these attributes to be when we create an object. Let's look at a simple example, we'll create a read only version of our movie object, but with just the title.

Below Object.defineProperties() will take as a first argument the object whose properties we wish to define, in this case by passing an empty object we are in effect creating the object. The second argument is itself an object, where the property we wish to specify, in this case 'title', is created with another object that has all the specifications for the attributes.

```js
 var movie = Object.defineProperties({},
  { title: { value: 'Ex-Machina', 
             writable: false, 
             enumerable:true, 
             configurable:true },
  } 
);

movie.title = "Mac and Me"; //fail

movie.title; //output: "Ex-Machina"
```

It is useful to prevent tampering with an object, often if you intend for certain functionality to be present or behave in a certain way, you don't want users of your code, or other developers to inadvertently break it. Setting the accessibility of properties is one way that we do that.

### Locking Down Object literals
So far we have looked at accessibility at the property level, now let's turn our attention to the object level.

Objects in Javascript have a property named extensible, and as you might imagine this governs whether or not an object can be extended, which means it governs whether or not you can add additonal properties to the object.

//check quickly whether or not movie is extensible

```js
Object.isExtensible(movie); //output: true
```

There are a few ways that we can prevent movie from being extended:

`Object.preventExtensions(movie)`

`Object.seal(movie)`

`Object.freeze(movie)`

*In turn you can check if an object is in one of these states with:*

`Object.isExtensible(anObj)`

`Object.isSealed(anObj)`

`Object.isFrozen(anObj)`

so let's look at what each of them does.

#### .preventExtensions()

This method will prevent new properties from being added to the object, the way it's distinguished from the seal and freeze is that it does not modify properties that are already defined on the object.

```js
var course = { name: 'History', professor : 'Dr. Smith' }

Object.preventExtensions(course); 

//this will fail
course.courseNumber = 101; 
course.courseNumber //output: undefined

//we can still mess with properties already defined
course.name = 'Math';
course.name //output: Math

//delete the  course name
delete course.name

course.name //output undefined
```

Existing properties are not affected by Object.preventExtensions, and can be modified or deleted.

Important- This is not reversible, you cannot open up an object to extensions once you call Object.preventExtensions on it.

#### .seal()

This does the same thing as above, but adds on the restriction that we cannot delete or mess with the configurations or the properties, so we cannot change course name to be read only, or prevent it from being enumerated, we also cannot delete any properties.

```js
var course = { name: 'History', professor : 'Dr. Smith' }

//let's seal our object
Object.seal(course);

delete course.name //this won't work
course.name  //output: 'History'

//we can still write to properties that are writable
course.name = 'Math'
course.name  //output: 'Math'
```

#### .freeze();

Freeze is a layer of restriction on top of what seal does, so it will do everything that seal will do and additional prevent any properties from being written to. It basically snapshots an objects state at the instance it is called, preventing modifications to anything, including properties already defined, whether or not they were previously writable or not.

```js
var course  = { name: 'History', professor : 'Dr. Smith'}
Object.freeze(course);
course.name = 'Math';  //this will fail
```

## Lab - 15 min
Make yourself as an object, give yourself properties and methods, make your haircolor mutable, make your eye color not mutable and both of them  not enumerable. A method that should return wether you're smiling or not, and a property of isSmiling that can be set, and is `enumerable` and `writable`

Bonus: Find all the object properties by 'enumerable' 'writable' and 'configurable' groups and echo them as such.

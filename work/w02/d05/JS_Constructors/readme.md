# Constructors and Prototypes

### Objectives
*After this lesson, students will be able to:*

- Use JS prototypes with Objects
- Identify the properties that are inherited by an object's prototype
- Use the `new ` operator with one or more arguments to set initial properties on a newly-constrcuted object

## Object Orientated Programming in Javascript - Intro (5 mins)

A while back we practiced creating JavaScript objects; so now, it's time we turn our attention to "object oriented programming" in JavaScript.  We'll be exploring what a `Class` means in ES5 JavaScript and of course, define and instantiate objects.

#### Review

Remember, when we talk about classes in Object Oriented Programming, we're describing a way of organizing your code and schema to model real world problems and data structures in our applications.  In essence, We use classes to "model" the world around us.

But, technically speaking, there are no classes in ES5 JavaScript - that's because even though ES5 JavScript is object-oriented, it is not a class-based language. Rather, it's a [prototipical](https://en.wikipedia.org/wiki/Prototype-based_programming) language. But, we can use JavaScript just like we're used to - as a class-based language - if we think of the **Constructor Functions** like classes, like so many people do.


#### Syntax to create an Object - Demo (15 mins)

The syntax for creating Objects in Javascript comes in two forms:

- the **declarative (literal)** form
- and the **constructed** form

The literal syntax for an object looks like this:

```javascript
var myObj = {
  key: value
};
```

The constructed form looks like this:

```javascript
var myObj = new Object();
myObj.key = value;
```

#### What is a constructor function?

A constructor is any Javascript function that is used to return a new object. The language doesn’t make a distinction. A function can be written to be used as a constructor or to be called as a normal function, or to be used either way.

If we wanted to simulate a class in JavaScript:

```javascript
var Person = function ( name ) {
  this.name = name;
}
```

#### What about the `new` operator?

The [`new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) operator in Javascript creates a new instance of a user-defined object type or of one of the built-in object types that has a constructor function.

Now that we have a constructor function, we can use the `new` operator to create a `Person`:

```javascript
var jenny = new Person('Jenny');
// undefined
```

To be sure `jenny` is infact a `Person`, we can:

```javascript
jenny instanceof Person;
// true
```

## Literal vs Constructor Notation - Codealong (15 mins)

Okay - if we can use both literal and constructor syntax to create objects, what should we use and when should we use it? Honestly, they're one in the same. The key difference being when you need multiple instances of your object:

- An object defined with a constructor allows for multiple instances of the object, whereas, object literals can be thought of as
- Object literals are basically singletons with public variables/methods

  -  _"The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton."_ - dofactory.com:

If we created a person with the literal notation:

```javascript
var Person = {
  name: "alex",
}

Person
// Object {name: "alex"}
```

To create another Person, we would need to type this code out again. Or we could use a constructor and do:

```javascript
var Person = function ( name ) {
  this.name = name;
}

var person1 = new Person( "Dave" );
var person2 = new Person( "John" );
```

Just like in Ruby, a constructor acts as a template for all new People in the future. However, it's a little bit more than just a template because of how Prototypical inheritance works, as instances of an Object have links to the object that created them.

#### .constructor

Let's say we wanted to figure out where a "class" came from: we can use use the property [`.constructor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) to take a look at the function that instantiated a new object:

```javascript
Person.constructor
// Object()
```

A new function is always an example of Object() in Javascript.

Now, if we instantiate the Person class -  with the declarative syntax - we see that the constructor (alex) is now a reference to the custom constructor function (`Person(name)`).

```javascript
var Person = function ( name ){
  this.name = name;
}

var alex = new Person("alex");
alex.constructor
// Person(name)
```

We can also use [`Object.getPrototypeOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) to do the same:

```javascript
Object.getPrototypeOf(alex)
// Person {}
```

## Prototype chains and inheritance - Intro (10 mins)

There is only one construct when it comes to inheritance in JavaScript - objects.

All objects have internal links to other objects - we call these "other objects" prototypes; and that prototype object will have an inherited prototype of its own.  This goes on until we find an object with a `null` prototype. By definition `null` does not have a prototype; it acts as the end of the prototype chain.

![spyqq7jwqubh4oyfvqnnw7g](https://cloud.githubusercontent.com/assets/40461/8396752/737ff1c0-1dab-11e5-83b0-4f380980b2b5.png)

We know that objects are basically key/value pairs. When you ask for a key's value from an object, JavaScript will look, first, to find the value in the instance of the object, and then, if it doesn't exist, it will look to that object's prototype 'default value', just like single-parent inheritance in Ruby. Note that this inheritance chains can go as long as you want, but generally, it's better to keep them short and have your code easier to understand.

## Adding Properties and Methods to Objects - Codealong (15 mins)

Let's revisit the constructor function from earlier, and use it to create two people from the Person class:

```javascript
var Person = function ( name ) {
  this.name = name;
}

var mum = new Person( "mum" );
var dad = new Person( "dad" );
```

Of course, we'll want to add information to our existing objects.  Super easy with dot notation:

```javascript
mum.nationality = "British";
// "British"
```

And dad will be unaffected:

```javascript
dad.nationality
// undefined
```

How about adding a method? Also easy:

```javascript
mum.speak = function() { alert("hello"); }
mum.speak()
```

Again, `dad` will not have this function, only `mum` will have it.


#### What if we wanted to change all instances of the Object?

If we wanted to add a new property to both `mum` and `dad` after they've been instantiated, we can define a property on the shared prototype; and since the `mum` and `dad` objects have the same prototype, they will both inherit that property.

```javascript
Person.prototype.species = "Human";
// "Human"

mum.species
// Human

dad.species
// Human
```

Amazing!
<br>

#### Use the Prototype

Using Prototype will enable us to easily define methods to all instances of the instances while saving memory. What's great is that the method will only be applied to the prototype of the object, so it is only stored in the memory once, because objects coming from the same constructor point to one common prototype object.

In addition to that, all instances of Person will have access to that method.

```javascript
function Person( name, age ){
  this.name = name;
  this.age = age ? age : 0;
}

Person.prototype.speak = function(){
  alert("My name is, " + name);
}

Person.prototype.changeName = function ( val ) {
	this.name = val;
}

Person.prototype.haveBirthday = function () {
	this.age++;
}

var mum = new Person( "mum", 34 );
var dad = new Person( "dad", 47 );

mum.speak == dad.speak;
// true

dad.changeName( "pops" );
dad.haveBirthday();
console.log( dad.age );
```

So if you have methods that are going to be shared by all instances of an Object, they can all have access to them.

#### Multiple inheritance - Codealong (10 mins)

At the moment, we are only using constructors to create an instance of one Object. You can do multiple inheritance in Javascript using a number of different methods:

#### Creating a prototype chain

Setting a constructor's `.prototype` property to an instance of another constructor function initializes the prototype chain (sets up inheritance), this is done only once since the prototype object is shared by all initialized objects.

```javascript
var Human = function (){
  this.alive = true;
}

var Person = function ( name ) {
  this.name = name;
}

// Would normally be a reference to Person {}
// But we are changing it to Human {} to exend the Human {}
Person.prototype = new Human();

var alex = new Person( "Alex" );
```

Instead of doing:

```javascript
Person.prototype = new Human();
```
You can actually use the new [`Object.create`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create) method:

```javascript
Person.prototype = Object.create( Human.prototype );
```
Object.create will not actually run the constructor code, making performance a little better.



## Lab - Independent Practice - 105 min

You are going to take over the Javascript world with a new army of Soldier objects.

- Create an army object `{}` you should be able to add soldiers to your army.
	- The ranks of this army shal be `private`, `sergeant`, `lieutenant`, `captain`, and `general` in that order or hierarchy.
	- Your army has a general who's rank is `general`
	- Your army can promote soldiers
	- Your army should build 25 soldiers with at least one `general`, `captain` and `lieutenant`, and at least 4 `sergeants`

- Create a new soldier constructor `function` that allows you to create soldiers
	- A soldier has a `name`, `number`, and `rank`.
	- A soldier can `battleCry`, `promote`, and `fight`
	- The default rank of a solder should be `private`
	- The soldier's `number` should sequentially increase
	- All soldiers in the army have the same `battleCry`, an alert of "FREEDOM!"
	- A soldier can `promote` any soldier with a lower rank

BONUSES:

- Give your army and soldiers a graphical representation in HTML.
- Instead of the army auto generating soldiers have an army base, and a 'build soldier' button.
- Build a button related to the graphic of a solider that lets them promote another one, or use the army base to promote ( use their ID? Drag & Drop? )
- Pair up and have your soldiers fight a friends army
	- Soldiers need a `die` method1
	- When a soldiers engages in a `fight` with:
		- an opposing soldier of equal rank they have a 50% chance to win
		- an opposing soldier of lower rank they have a 65% chance to win
		- an opposing soldier or rank `general` and is also not a general they have 20% to win
- Store your army in local storage so it doesn't disappear when you reload the page.

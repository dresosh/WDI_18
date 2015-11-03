# JS Control Flow - Controlling which bit of your code gets executed.

## SWBAT

- Identify boolean operators, and understand what is meant by "truthy" and "falsy"
- Confidently write if/else loops
- Use the ternary operator
- Apply loops and iterators using conditional statements

------

### Self Assessment

* **Fizz-Buzz**
  *  For each number from `1` to `100`  print the following: `fizz` if it is a multiple of `3`, `buzz` if it is a multiple of `5`, and `fizzbuzz` it is a multiple of both.
  
-----

Did anyone use the "&&" operator?

### Logical Operators

There are three types of operators that work with booleans

* **AND**, denoted `&&` 
* **OR**, denoted `||`
* **NOT**, denoted `!`

All of these return either true or false

[MDN Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

So what will these return?
```
"hello" === 'hello'
5 === 5
true === false
null === null;
undefined === undefined;

var a = ["UCLA", "USC"] 
var b = ["UCLA", "USC"]
a === b

var x = {name: "Godzilla"}
var y = {name: "Godzilla"}
x === y
```

...JUST when I thought I understood JavaScript.

The second set of examples fail because both **arrays** and **object literals** are complex objects, and not just simple values like strings, numbers, and booleans. Objects can be complex collections of values in memory that we are referring to in a program, and so to simplify things, we only store each object as an id, and it is this id in memory that then points to all the data about the object.

However, that means when we go to compare the two objects we don't care if they point to the same collections. We only compare their respective ids when checking for equality, and each object or array represents a new object with it's own unique id.

If we want to compare arrays, we can convert them to strings first.

[1,2,3].toString() == [1,2,3].toString()
----

#### True and false, truthy and falsy

In javascript, "true" and "false" are easy to understand. They are exactly what they say they are.

But JavaScript (and most languages) also allow a lot of other things to *evaluate* to true, if we test them. 

if(true){
    console.log("The condition evaluated to true");
}

if(false){
    console.log("The condition evaluated to true");
}

Let's try a few others:
```
true
false
1
0 (zero)
-1
"" (empty string)
[] (empty array)
{} (empty object)
null
undefined
NaN (a special Number value meaning Not-a-Number!)
```

```javascript
A quicker way to check truthiness is the use the double NOT (!) operator
```

### Conditionals

Run to the store and pick up a loaf of bread. If they have eggs, get a dozen.

The programmer comes home with 12 loaves of bread.

Conditionals are a way of essentially skipping over a block of code if it does not pass boolean expression.

This is how we write a conditional:

```
if(boolean expression) { 
  // all the good code 
}
```

```
if(boolean expression) { 
  // some good code 
} else {
  // some good code
}
```

```
if(boolean expression) { 
  // some good code 
} else if(another boolean expression){
  // some good code
} else {
  // some more good code
}
```

###Your task IN PAIRS

(First, we'll do an example in pairs:)

0. Use conditionals to check if a hardcoded word is "javascript". If it is, console.log "Great language!"

  ```
  var word = // write a word here
  
  // write your conditions here
  
  ```

1. Use conditionals to check if a hardcoded number is `odd` or `even`, and then 
`console.log` the number is `odd` or `even` with the numbers value.

  ```
  var num = // write a number here
  
  // write your conditions here
  
  ```

2. Use conditionals to check if a hardcoded number is divisible by `2` or  `3` 
and then `console.log` that the number is divisible by two or three.

  ```
  var num = // write a number here
  
  // write your conditions here
  
  ```

3. Use conditionals to check if a hardcoded `quantity` is `1` or greater than 
one. If the `quantity`  is one or greater `console.log` either `1 pet` or 
`quantity + " pets"` respectively.

  ```
  var quantity = ;// write a number here
  
  // write your conditions here
  
  ```

----
Easy, right?
----

#### Intermediate tasks:

4. There is an event with ticket prices that are `$50`, `$65`, `$85` for 
standard, premier, and premier plus (for drinks) seating. Seniors, veterans, 
and students receive a `$10` discount while standard patrons receive no 
discount. Based on hardcoded variables for `ticketType` and `discountType`, 
print out a patrons `ticketPrice`.

----
### Let's take a look at the TERNARY OPERATOR!

question/conditional ? do this if true : do this if false

```
99 > 1 ? "we return this if the statement is true" : "...and we return this if the statement is false"
```
----

###Your task:

1) Either go back to previous tasks and rewrite them using the ternary

OR

2) Write this decision tree as a conditional:

<img src="decision_tree.gif">

(you'll need three variables: parentsVisiting, weather, and money, and the conditional should output what you should do).

For an extra bonus, wrap it up in a function called whatShouldIDoToday()



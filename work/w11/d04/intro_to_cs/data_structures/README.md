#Data Structures!

##SWBAT
* Explain the difference between an Abstract Data Type and a Data Structure
* Build a data structure that implements an abstract data type
* Explain what a stack is
* Explain what a queue is
* Explain what a linked list is

-----

What makes a program good?

* It works (as specified!).
* It is easy to understand and modify.
* It is reasonably efficient.

-----

To help us make something that is easy to understand and modify, we can use ABSTRACT DATA TYPES.
```
An Abstract Data Type, sometimes abbreviated ADT, is simply a way of storing data that is defined by a set of operations but that can be implemented in a variety of ways.
```

In other words - we are tying to separate *specification* from *implementation*.

In other words - we are concerned only with what the data is representing, and what we will do with it, and NOT with how it will eventually be constructed.

In other words - since there will usually be many different ways to implement an abstract data type, this "implementation independence" allows the programmer to switch the details of the implementation without changing the way the user of the data interacts with it.

ADTs are a theoretical concept in computer science, used in the design and analysis of algorithms, data structures, and software systems, and do not correspond to specific features of computer languages.


------
##Examples of abstract data types

###Example 1
In computer science, an associative array, map, symbol table, or dictionary is an abstract data type composed of a collection of (key, value) pairs, such that each possible key appears just once in the collection.

What does this sound like? 

###Example 2
This ADT is a programmer-defined linear ordering of objects from a finite set of objects termed an alphabet. The alphabet may be restricted to alphanumeric and punctuation characters but may also include additional mark-up information such as a new line character. Hmm.. what does this sound like? 


So we have Abstract Data Types - computer science speak for representations of data. And then we have Data Structures - concrete implementations of one or more ADTs.


-----


##Let's take a look at another Abstract Data Type, the STACK!

<img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Data_stack.svg">

The stack was first proposed in 1946, in the computer design of Alan M. Turing.

An ADT is defined by the operations that can be performed on it, which is called an interface. The interface for a stack consists of these operations: init, push, pop, is_empty

No matter how many elements are in the stack, an item can be pushed or popped in a constant time. (This is known as O(1) in computer science parlance - we'll have a lesson about this later)


##Let's make a stack!

```ruby
class Stack

end
```

##Your task
*1 - make an initialize method that sets @contents to an empty array. Check that it works by going into irb, requiring the file, and making a new Stack. Remember to user ```require_relative``` to get access to the file you wrote your code in. (e.g. if your file is stack.rb, then you need to write require_relative 'stack').

*2 - Write a method called push, that accepts a single argument. The method should add whatever the argument is on to the end of the array.

*3 - Write a method called pop, that also accepts a single argument. The method should remove the item at the end of the array.

*4 - Write a method called is_empty, that returns true if the stack is empty, and false otherwise. 

BONUS TASKS - Write a method called ```peek```, that returns the final item of @contents (but NOT remove it from the array). Write a mthod called ```clear``` that removes all items in the stack. 

<!-- 
Undo functions use this to pop most recent action off top of stack, then second most recent, etc.

Stacks make excellent mechanisms for temporary storage of information within procedures. A primary reason for this is that they allow recursive invocations of procedures without risk of destroying data from previous invocations of the routine. They also support reentrant code. As an added advantage, stacks may be used to pass the parameters between these same procedures. Finally, they can conserve memory space by allowing different procedures to use the same memory space over and over again for temporary variable allocation, instead of reserving room within each procedure's memory for temporary variables. -->


##Recap and intro to the queue:
<a href="https://www.youtube.com/watch?v=6QS_Cup1YoI">Let's spend 3 minutes and 40 seconds watching this cool vid</a> 

The queue ADT interface is defined by the methods init, insert, remove, and is_empty.

What concrete software applications might use a stack?
<!-- You don't need to actually code a stack in order to use it. We can use it in a parentheses checker - a popular interview question! -->

<!-- Integer values are common data items. They are used in computer programs and computation all the time. We learn about them in math class and of course represent them using the decimal number system, or base 10. The decimal number 23310 and its corresponding binary equivalent 111010012 are interpreted respectively as

2×102+3×101+3×100

and

1×27+1×26+1×25+0×24+1×23+0×22+0×21+1×20

But how can we easily convert integer values into binary numbers? The answer is an algorithm called “Divide by 2” that uses a stack to keep track of the digits for the binary result.

The Divide by 2 algorithm assumes that we start with an integer greater than 0. A simple iteration then continually divides the decimal number by 2 and keeps track of the remainder. The first division by 2 gives information as to whether the value is even or odd. An even value will have a remainder of 0. It will have the digit 0 in the ones place. An odd value will have a remainder of 1 and will have the digit 1 in the ones place. We think about building our binary number as a sequence of digits; the first remainder we compute will actually be the last digit in the sequence. As shown in Figure 5, we again see the reversal property that signals that a stack is likely to be the appropriate data structure for solving the problem.
 -->

<!-- <img src="http://interactivepython.org/runestone/static/pythonds/_images/dectobin.png"> -->

What concrete software applications might use a queue?


##Linked Lists
Let's say we have an alphabetical contact list, with Amy, Charles, and Erica as our contacts. We could store this as an array. How would this look?

Now let's say we met someone called Bob, and we want to add him to our contacts. 
<!-- This is a pain right? We should have a way to insert someone and still have it in order -->

In computer science, a linked list is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence; more complex variants add additional links. This structure allows for efficient insertion or removal of elements from any position in the sequence


<!-- LInked lists are not good at searching though, we always have to start at the beginning -->


# ADTs in action 

## Stacks review

Imagine a stack of papers -- a paper placed on top will also be the first paper removed. This is known as **FIFO** (First-In, First-Out).

A **stack** is a primitive data structure that has the following fundamental methods:

- **push(item)** - Adds an item to the top of the stack.
- **pop** - Removes and returns the top-most item.
- **empty?** - Returns true if the stack is empty.


Stacks are used because:

- A stack is conceptually easier to reason about than an array.
- No matter how many elements are in the stack, an item can be pushed or popped in a constant time. (This is known as O(1) in computer science parlance.)

<!-- 
In the following implementation, we use Ruby's built-in Array class to implement a stack.

***RUBY IMPLEMENTATION W/ ARRAY***

``` ruby
class Stack

  #the array we'll be storing values in 
  def initialize
    @contents = []
  end

  #add to top of stack
  #the optional if statement is used if we want
  #to limit the size of the stack
  def push(elem)
    # return "Stack Overflow!" if @contents.length == 1
    @contents.push(elem)
  end

  #remove top element of stack
  def pop
    @contents.pop
  end

  #view the topmost element in stack
  def peek
    @contents.last
  end

  #if stack is empty returns true, else returns false
  def empty?
    @contents.length == 0
  end

  #delete all items in the stack
  def clear
    @contents.clear
  end
end
```


***JAVASCRIPT IMPLEMENTATION W/ ARRAY***

``` javascript
function Stack() {

  this.contents = []; //the array we'll be storing values in
 
}

 
//add to top of stack
//the optional if/else statement is used if we want
//to limit the size of the stack
Stack.prototype.push = function(num) {
	if(self.contents.length === 5){
		return "Stack Overflow!";
	} 

	this.contents.push(num);
	return this.contents;
};

//remove top element of stack
Stack.prototype.pop = function() {
	this.contents.pop();
	return this.contents;
};

//view the topmost element in stack
Stack.prototype.peek = function() {
	return this.contents[this.contents.length - 1];
};

//if stack is empty returns true, else returns false
Stack.prototype.isEmpty = function() {
	return this.contents.length === 0;
};

//delete all items in the stack
Stack.prototype.clear = function(){
	this.contents.length = 0;
	return this.contents;
};

```
 -->


*Would we do all this in real life to 'make a stack'?*

No. We would just use an array with the functions that it already comes with.


## Using a stack in real problem
* Given a string of opening and closing parentheses, check whether it’s balanced.

This is a real interview question, and it's purpose if to see if you understand STACKS

e.g. (((())))   => true
e.g. (((())		=> false

* Now do it with all three types of parentheses, (), {}, and []

e.g. ({[]})		=> true
e.g. ({)]		=> false

* ...and make sure they are opened and closed in the correct order:
e.g. ({[]})	 	=> true
e.g. ({[}])		=> false

<!-- 
Here's a rough attempt at it:

function isBalanced(str){
    
    var myStack = [];
    var openers = ["(", "{", "["];
    var closers = [")", "}", "]"];
    
    for(i=0; i < str.length; i++){
        if(openers.indexOf(str[i]) >= 0){
            myStack.push(str[i]);
        } 
        if(closers.indexOf(str[i]) >= 0){
            var popped = myStack.pop();
            if(closers.indexOf(str[i]) !== openers.indexOf(popped)){
                return false;
            }
        }
    }
    
    if(myStack.length > 0) return false;
    return true;
}

isBalanced("()[]");

========================

And here's a slightly better attempt, same logic, but uses an object as an associative array:

function isBalanced(str){
    
    var myStack = [];
    var matchers = {"{": "}", "[": "]", "(": ")"};
    
    for(i=0; i < str.length; i++){
        if(str[i] in matchers){
            myStack.push(str[i])
        } else {
            if(matchers[myStack.pop()] !== str[i]){
                return false
            }
        }
    }
  
    if(myStack.length > 0) return false;
    return true;
}

isBalanced("{[](})");

 -->


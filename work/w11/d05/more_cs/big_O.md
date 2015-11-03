#Big O notation

##Learning Objectives
* understand what big O notation is
* understand examples of
  * O(1)
  * O(n)
  * O(n^2)
  * O(log n)

As we work through different examples today try to think of a ruby or javascript implementation that applies to one of them and write it down somewhere

---

In computer science, big O notation is used to classify algorithms by how they respond (e.g., in their processing time or working space requirements) to changes in input size


###Starter task

Imagine that you're trying to dry a bunch of shirts using a washing line outdoors. (assume you have an infinite backyard)  

* How long will it take to dry one shirt?  

* How about 5 shirts?

* What about a million shirts?


---

Now imagine you have some dishes to wash. 

* How long does it take to wash one dish? 

* How about 5 dishes?

* What about a million dishes?

---

###Ok now let's play the big O game with your neighbour!

One person silently picks a number between 1 and 100 (inclusive). The other person tries to guess the number. For each guess, the person who originally thought of the number tells the guesser if the number is LOWER or HIGHER. Keep going until the guesser correctly guesses the number.

How many tries did it take?

What is the max number of guesses it should take?

Ok, what is the maximum number of guesses it should take if we play the game for numbers between 1 and 200? 1 and 400? 1 and 800?

---

Ok, one last bit of fun before we really get to work...

A traveling salesman needs to travel around a bunch of interconnected towns. Given towns A, B, and C, work with a partner and figure out the different ways to go through each and every town.

How many possibilities did you get? 

Now add another town into the Mix so we have towns A, B, C, and D and do the same thing.
what would happen if we added in a 5th town? or a sixth? how many possibilites would there be?

How many different routes are there when we have to visit 10 different towns?


##Big O in action!

Write a ruby OR javascript function in repl.it for each of the following things, and say what you think what their big O notation (aka their 'time complexity' would be)

* A function that logs the first item in an array

* A function that logs the last item in an array

* A function that prints out every item in an array

* A function that repeatedly halves an input argument until it is less than 1

* A function called ```my_turn_to_be_uppercase``` that takes an array of lowercase strings as an input. 

For each item in the array, it should do the following: Print out the full array, with the first item in UPPERCASE, followed by all the other items in lowercase. Then it should print out the full array again, but with only the second item in UPPERCASE. Then it should print out the full array again, but with only the third item in UPPERCASE, and so on. After each print out of the array, it should print out ```------```.

For example:  
```
my_turn_to_be_uppercase(["apples", "pears", "apricots", "bananas"])

//=> this should return the following:

"APPLES"
"pears"
"apricots"
"bananas"
"------"
"apples"
"PEARS"
"apricots"
"bananas"
"------"
"apples"
"pears"
"APRICOTS"
"bananas"
"------"
"apples"
"pears"
"apricots"
"BANANAS"
"------" 
```

* You are given an integer n. Write a method called count_up_to(n) that counts the total of 1 + 2 + . . . + n






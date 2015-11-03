---
title: intro to testing
type: lesson
duration: '1:15'
creator:
    name: Blaise Thomas
    city: LA // Santa Monica
competencies: Testing, Server Applications
---

#Intro to Testing (part 1)
(Testing in Node with Mocha and Chai & Testing Ruby using RSPEC)

### Objectives
*After this lesson, students will be able to:*

* Have a good understanding of what testing is and why it is important.
	* Understand the difference between TDD and 'retrospective' (after the fact) testing.
	* Understand the difference between unit tests and E2E tests.
* Do some basic testing in Node using Mocha.
	* The testing Cycle:
		1. Pending - Orange
		2. Failing - Red
		3. Passing - GREEN!  
	* "Describe" blocks
	* "It" examples
	* Understand the difference between a **testing framework** like **mocha**, and an **assertion library** like **chai**. 

### Preparation
*Before this lesson, students should already know:*

* JS fundamentals
* How to write a simple Node application


## Intro 

Note: **"Tests"** and **"Specs"** are often used interchangeably

Testing is quite hard to wrap your head around initially - **but** then it becomes super easy and very fun (once you identify the basic, simple pattern). **QA** can be a great entry level position, because it is in high demand and you will learn a lot about the code base you are testing. 

Testing is similar to [double entry bookkeeping](https://en.wikipedia.org/wiki/Double-entry_bookkeeping_system) (an accounting practice) but for code.

It is the process of writing a series of **automated** tests to ensure that your code works. If the code is broken, a test will fail.

We have already been doing a bunch of **manual** testing. Every time you render your code in the browser, you are effectively testing for a given result, manually. Testing manually can be very time consuming. 

Enter automated tests. With a single command you can run an entire series of tests. You can also run tests in the background that will alert you if something is broken. 

You can test for anything, and even match your user stories: "as a [anybody], I can create a [user], on the signup page", "as a [user], I can start a session, on the login page", "as a [user], I can create a new todo item, and save it to the db" etc...

##TDD

Because we are such badass coders, why not even just start the whole process by writing the tests first? Then we can make these tests pass by writing the code. This is TDD. 

Once you have experienced this you will appreciate the beauty of TDD. Writing tests **before** you write the code helps ensure that your **intent** is truly fullfilled. It is similar to **pseudocoding** then writing code, but even more water-tight. 

In this way we can liken testing to the scaffolding of a building - it makes sense to lay the scaffolding first, then build the building, instead of building a freestanding structure and supporting it with scaffolding. 

TDD can be tricky. Writing tests doesn't have to be.

##Unit v E2E:

The terminology thrown around here can be a bit confusing: A simple way to see it could be that there are **units specs**, and then **everything else**. Everything else includes things such as integration tests, End to End, User acceptance tests etc etc....

Unit specs are **granular** and are about testing small units of code. Unit tests try to answer questions such as "Did I think about the logic correctly?" or "Does the sort function order the list in the right order?"

E2E tests are more extensive and might look for multiple actions across multiple controllers. They try to match up to your **user stories** "As a [x], when I [y], I can [z], so that [xyz]"

**TASK** > Take a moment to think about the advantages and disadvantages of each type of testing, and understand why a thoroughly tested app will comprise of both types. 

Below are some examples from a Rails Shopping list app - where a User can create 'Items'

####Unit specs

```
describe "GET index" do
    before :each do
      get :index
    end
    it "assigns all items as @items" do
      expect(assigns(:items)).to include(@item1, @item2)
    end
    it "renders the index template" do
      expect(response).to render_template("index") 
    end
    it "response should be a success" do
      # expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end
```

This is a great example of unit specs for the index action for our Items controller. This test checks for 3 things: 

1. that a @items variable exists and that it includes all the items from the db
2. that an index template is rendered
3. that there is an http status of 200 for the page that will be returned.

As you can see, these are quite low level tests that are looking for the existance of quite **basic** functionality in your controller. 

Unit specs are used for testing models, controllers and views.

####E2E specs

```
feature "a user can create a new item", :type => :feature do
  scenario "valid item" do
    visit '/items/new'
    fill_in "Name", with: "My new item"
    fill_in "Qty", with: "1"
    click_button "Create Item"
    expect(page).to have_content("My new item")
  end
  scenario "item with no name should be rejected" do
    visit '/items/new'
    fill_in "Name", with: ""
    fill_in "Qty", with: "1"
    click_button "Create Item"
    expect(page).to have_content("Name can't be blank")
  end
end
```

This is a great example of an E2E spec in Ruby using a library called [capybara](https://github.com/jnicklas/capybara).

This test reads like plain english. 

Integration specs can test for more in depth actions that might involve multiple controllers or models. We can match these specs to our **user stories**. In the example above the user story might be:

"As a user I can create a new shopping list item, only if I provide a valid name for that item. "


## Node, Mocha - Codealong (TDD style!)

Firstly - this is a one time setup: Global install of mocha

`$ npm install mocha -g`

Now lets create a new project, we will do this TDD style, writing the tests first. Let's make a simple program that does some basic string manipulation. We will create a single function "sanitize" that returns all lower case and removes hyphens.

`$ mkdir mocha-intro`

`$ cd mocha-intro`

`$ npm init`

`$ npm install mocha --save-dev` -dev is explicitely stating that mocha is a dependency that we will only be using for our development environment. 

---- 

`$ touch indexSpec.js`

The first step will be to create a series of pending examples that form our first suite. This is easy and if this is all you take away form this lesson, it is a great start:

```
describe('Sanitize', function() {
  it('returns lowercase of a string');
  it('removes any hyphen');
})
```
**Suites** ("Describe...") are formed of **examples** ("it"....)

Mocha gives us two awesome tools: describe blocks allow us to create a suite. THESE ARE NOT THE TESTS!!! 

SUPER IMPORTANT NOTE: The most important thing when looking at testing for the first time is to distinguish between our **test framework** (mocha) and our **assertion library** (chai) 

So far we have just used **mocha** to tee up our test. 

TASK: Using google, try to figure out this difference and then we will go over it in class. 

---

Let's try running our first test suite:

`$ mocha indexSpec.js`

This is how you run your specs. Just run mocha against the test file of your choice. (in this case indexSpec.js) You can group all your specs into directories and trigger them all with a single command. 

Running your tests will return a print out in the command line: 

```txt
  Sanitize
    - returns a lowercase of a string
    - removes any hyphen


  0 passing (6ms)
  2 pending
```
It is often color coded (depnding on framework and customization). Tests can be in one of three categories: 

* Pending (amber)
* Failed (red)
* Passing (green)

In this case we have two pending examples, (Two pending specs) 

----
##Pending Tests - ORANGE

Write more pending examples, and group them into describe blocks. Run your tests, see them all pending in the print out. These pending examples can be about anything- we will not attempt to make them pass.

Example:

```
describe('I haven't done my homework', function() {
  it('the dog ate it');
  it('I accidentally left it on the bus');
})
```

The point of this practice is to remember we have not yet written any "logic" in our tests. 
All tests should start out in this state: pending.

## ASSERTIONS: Adding Chai to Mocha 

Did somebody say logic?

`$ npm install chai --save-dev`

This is our assertion library. It will take care of the next two stages: **RED** and **GREEN**: **FAILING** and **PASSING**. 

**Assertions** work by evaluating a statement.

* If the statemenet is **truthy**, the test will **PASS**. 
* If the statement is **falsy**, the test will **FAIL**.
* If the statement is **empty**, the test will **PEND**.


indexSpec.js

`var expect = require('chai').expect;`

Assertion:

`expect('HELLO WORLD').to.equal('hello world');`

It should fail. Why?

Let's play around with assertions a little more:

`expect('hello world').to.equal('hello world');`

This will pass. Why?

Next: try these out:

```
it('returns lowercase of a string', function() {
    

    expect(word).to.equal('hello world');
    expect(word).to.not.equal('hello earth');
    expect(word).to.be.a('string');
    expect(word).to.not.be.a('number');
    expect(word).to.contain('hello');
});

```

Now try adding at the top:

`var word = 'hello world';`

What happens?


##Failing Tests - RED

Now instead of declaring var word, we can import the target file (to be tested) and call the function we want to test. To check its actual output:

```
var word = require('./index');

...
it('returns lowercase of a string', function() {
    var inputWord = 'HELLO WORLD';
    var sanitizedWord = word.sanitize(inputWord);

    expect(sanitizedWord).to.equal('hello world');
    expect(sanitizedWord).to.not.equal('hello earth');
    expect(sanitizedWord).to.be.a('string');
    expect(sanitizedWord).to.not.be.a('number');
    expect(sanitizedWord).to.contain('hello');
});
...

```

Now add the second test:

```
...
it('removes any hyphen', function() {
    var inputWord = 'HELLO-WORLD';
    var sanitizedWord = word.sanitize(inputWord);

    expect(sanitizedWord).to.equal('hello world');
});
...
```

##Passing Tests - GREEN!

Now go write the code that will make this test pass. (A function, 'sanitize', thats turns a given string to all lowercase, and removes any hyphens.)

```
exports.sanitize = function(word) {
    return word.toLowerCase().replace(/-/g, ' ');
}
```


This markdown is very heavily inspired from this amazing resource on mocha/chai [link](http://build-podcast.com/mocha/)

---
title: Intro to express and express-routing
type: lesson
duration: '1:30'
creator:
    name: Gerry MATHE / Blaise Thomas
    city: London / LA	
competencies: Programming, Server Applications
---

# Intro to express and express-routing

### Objectives
*After this lesson, students will be able to:*

- Make a basic Express app with routes
- Use and configure middleware like body-parser to handle form submissions
- Write out the skeleton of a RESTful API
- Review what JSON is and why we're using JSON as the format for our data
- Interact with HTTP verbs using CURL or an app
- Identify the HTTP verbs we'll be using for an API

### Preparation
*Before this lesson, students should already be able to:*

- Explain HTTP requests/responses
- Explain MVC
- Write and explain basic javascript

## Recapping Node and Intro to Express - Intro (5 mins)

#### First let's review

* What is Node?

Node is a low-level, non-blocking, event-driven platform which allows you to write JavaScript on the server-side.

* What is npm?

npm is Node's package manager. It's used to manage dependencies. Think of it like RubyGems.

#### What is express.js?

Express.js is a simple web framework for Node.js. It provides many features for you to start using right away (Routing, Sessions) that you would have to do yourself if using vanilla Node. Think of it like **Rails for Node**, only much, much lighter. 

## Let's create a server using Node and Express - Codealong (15 mins)

Get to it:

1. `mkdir first-express-app`
2. `cd first-express-app`
3. `npm init` (Hit enter to accept the defaults and see the new [package.json](https://docs.npmjs.com/cli/init) file
4. `npm install express --save` (`--save` will mean it gets added to the project dependencies, this is similar to a gem but you can see it!)
5. `touch app.js` in first-express-app directory

Check out the package.json file:

```json
"dependencies": {
  "express": "^4.11.1"
}
```

Let's start coding!

```javascript
// app.js

var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hello World');
});


app.listen(port);
console.log('Server started on ' + port);
```

Notice the get verb here - this can also be post, put, delete, etc. Then run the app using:

```bash
node app.js
```

Navigate to `http://localhost:3000` and voila!

Now this is pretty awesome (isn't it?) but it doesn't really do anything. Plus, what if we want to start creating pages instead of just using sending text?

###Nodemon 

Notice that everytime you make a change to your code, you will have to relaunch `node`

`$ npm install -g nodemon` 

This is a really cool utility that will listen for changes to your code and automatically restart your server when a saved change is detected. 


## Routing in Express - Intro (5 mins)


Let's look at routes and handler callback functions in Express routes:

```javascript
app.get('/', function(req, res) {
  res.send('welcome');
});
```

Just like Rails, routes in Express are created using methods named after HTTP verbs. In the example above, we created a route to respond to GET requests at the root of the app. You will have a corresponding method on the app object for all the HTTP verbs.  In this example, we'll send back the `welcome` view as a response.

## Adding Routes to our app - Codealong (15 mins)

Let's add some routes. This should all be familiar but let's go through it.

[ExpressJS 4.0](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4) comes with the new Router. Router is like a mini Express application. It doesn’t bring in views or settings but provides us with the routing APIs like `.use`, `.get`, `.param`, and `route`.

First we define our _router_. This is what handles our routing. It's normally better to use this way of doing routes (and extracting them in to their own files) as it makes applications more modular, and you won't have a 500 line app.js.

```javascript
var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var personsRouter  = express.Router();
```

This needs to be under the definition of `var app`!  Then we add our routes.

```javascript

personsRouter.get('/', function(req, res) {
  res.send('index');
});

personsRouter.get('/contact', function(req, res) {
  res.send('contact');
});

personsRouter.get('/about', function(req, res) {
  res.send('about');
});
```

The best example of using Express Router is the following: Refactoring our routes so that each one has all associated http verbs for each endpoint:

```
personsRouter.route('/')
	.get // insert code
	.post // insert code
	.put // code
	.delete // code

```

At the bottom of the page add:

```javascript
app.use('/', personsRouter);
```

As we saw before we are rendering our template and then passing in a local variable (_header_) to use in our template, just like instance variables defined in our controller or layouts that we passed to our views in Rails.

## Restful Routing - Intro (10 mins)

As we've already seen with Rails, we will use the RESTful standard to build our web apps. At the moment, we've just covered how to handle GET requests, but we can create callbacks for all types of requests. For example, if we want to create a restful controller for the resource persons, it will look like:

```javascript
var personsRouter = express.Router();

personsRouter.get('/', function(req, res) {
  // INDEX
});

personsRouter.get('/:id', function(req, res) {
  // SHOW
});

personsRouter.get('/new', function(req, res) {
  // NEW
});

personsRouter.post('/', function(req, res) {
  // CREATE
});

personsRouter.get('/:id/edit', function(req, res) {
  // SHOW
});

personsRouter.put('/:id', function(req, res) {
  // UPDATE
});

personsRouter.delete('/:id', function(req, res) {
  // DELETE
});


app.use("/persons", personsRouter)

```

REFACTORED: 

```
var personsRouter = express.Router();

personsRouter.route('/')
	.get(function(req, res) {
  		// INDEX
	});
	.post(function(req, res) {
		// CREATE
	});

personsRouter.get('/new', function(req, res) {
  // NEW
});
	
personsRouter.route('/:id')
	.get(function(req, res) {
  		// SHOW
	});
	.put(function(req, res){
		// UPDATE
	});
	.delete(function(req, res) {
		//DELETE
	});

personsRouter.get('/:id/edit', function(req, res) {
  // GET FORM + Person
});

app.use("/persons", personsRouter)
```

We've defined that the endpoint for the person resource will be "/persons".
So the code above will create these 7 routes:

```javascript

GET    /persons
GET    /persons/:id
GET    /persons/new
POST   /persons
GET    /persons/:id/edit
PUT    /persons/:id
DELETE /persons/:id

```

## BodyParser and handling params/JSON - Intro (5) mins)

When data is sent to the server via a POST request, the content of the request is passed as a string, but we want to access it as if it was a JSON object:

If we have a form like this:

```html
    <form>
      <input type="text" name="book[title]">
      <input type="text" name="book[author]">
    </form>
```

Once this form is submitted, by default, the data on the server will look like this:

```json
{
  'book[title]'  : "value",
  'book[author]' : "value"
}
```

...but this is not really convenient, as accessing the data will be a bit complex to parse:

```javascript
req.body['book[title]']
```

It would be a bit more easy if we could use the data like:

```javascript
req.body.book.title
```

For this we will use `body-parser`.

## Configure your app to use body-parser - Codealong (10 mins)

First add the package to your `package.json` dependencies:

```json
"body-parser": "^1.13.2"
```

Now in `app.js`, add:

```javascript
app.use(bodyParser.urlencoded({ extended: true }));

```

The params passed with a request will be "decoded" automatically, allowing you to use dot notation when working with JavaScript objects.

If you are writing an api, meant to receive and send JSON, you would change the line above to:

```javascript
app.use(bodyParser.json());
```

Now the app will decode all JSON received in the body of a client request.



## Practice (as long as you need)

> ***Note:*** _This can be a pair programming activity or done independently._


1. In the same file, try to create the 7 Restful Routes for the resource "car". Every method should return some text saying the HTTP Verb, which URI has been used to do the request and which REST action it corresponds to.

	Example, for a POST request to `/cars` the text sent back should be:

	```
	POST request to /cars, this is the CREATE action
	```

	```javascript
	var carRouter = express.Router();

	carRouter.get('/', function(req, res) {
	  // INDEX
	});

	carRouter.get('/:id', function(req, res) {
	  // SHOW
	});

	carRouter.get('/new', function(req, res) {
	  // NEW
	});

	carRouter.post('/', function(req, res) {
	  // CREATE
	});

	carRouter.get('/:id/edit', function(req, res) {
	  // SHOW
	});

	carRouter.put('/:id', function(req, res) {
	  // UPDATE
	});

	carRouter.delete('/:id', function(req, res) {
	  // DELETE
	});


	app.use("/cars", carRouter)
	```


	Also, test your application with `cURL` requests to each of the RESTful endpoints.

2. In a new file, try this all over again from scratch, but also include an API that outputs JSON and another API endpoint (/api/random) that returns a random string each time. 

## Conclusion (5 mins)
A framework can be overwhelming at the start, after a couple of days you will see how it makes your life easier.  We will work more on how to make RESTful controllers, this is just an introduction.

- What is Middleware and why is it helpful in Exrpess?
- Explain how body-parser helps decode information in your application.
- Identify some similarities and differences between Express and Rails.

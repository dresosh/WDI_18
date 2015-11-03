# DOUBLE-TIME CODE MARCH!

We're going to make an API that CRUDs users. 

We'll write it all in server.js, then maybe we'll extract bits out into a controller file and a routes file so it's easier to follow.

This is just like office hours last week, but we need to do it much more quickly because we need to use it in the next lesson.

There will be four steps:

1 - Setting up a simple server

2 - Making a user model

3 - Making some routes (i.e. running a function for each request)

4 - Cleaning up our code (extracting out the functions that run on each request into a separrate file)


## 1 - The simplest server:

```
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
	res.send('welcome to the home page')
})

app.listen(port)
console.log("listening on " + port)

```


Great, let's add some middleware that bodyParser and morgan gives us:

```
...
var port = process.env.port || 8080;


// Configure the middleware - bodyParser to parse the body of requests with payloads, and morgan to log stuff out
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'))

app.get('/', function(req, res){
	res.send('welcome to the home page')
})

...

```

Now let's add a simple route for a namespaced api:

```
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var port = process.env.port || 8080;
var apiRouter = express.Router() // get an instance of the router

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use('/api', apiRouter) // tell the app to use the apiRouter if it receives a request with /api at the start

// write a simple get '/' route for the api
apiRouter.get('/', function(req, res){
	res.send({message: "welcome to the api"})
})

app.get('/', function(req, res){
	res.send('welcome to the home page')
})

app.listen(port)
console.log("listening on " + port)


```

## 2 - The user model

Before we make a User schema, let's make sure our app is connected to mongo:

```
//in server.js

mongoose.connect('http://localhost:27017/name_of_may_database')

```

Ok, now let's make the model:

```
// in app/models/User.js

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')

// make the user schema
var UserSchema = new Schema({
	name: String,
	username: {type: String, required: true, index: {unique: true}},
	password: {type: String, required: true, select: false}
})

// hash the password before anything is saved with this schema!
UserSchema.pre('save', function(next){
	var user = this;

	// but only hash the password if the password has changed (or the user is brand new)
	if(!user.isModified('password')) return next()

	// generate the salt:
	bcrypt.hash(user.password, null, null, function(err, hash){
		user.password = hash
		next()
	})
})

// Let's at a method that compares the stored/hashed version of the password with a param that we pass in
UserSchema.methods.comparePassword = function(password){
	var user = this;
	return bcrypt.compareSync(password, user.password)
}


// Finally, too use our schema definition, we need to convert our blogSchema into a Model we can work with. 
// To do so, we pass it into mongoose.model(modelName, schema). And we export it so we can use it elsewhere, obv
module.exports = mongoose.model('User', UserSchema)

```

...and let's remember to require this User model in our server.js:

```
//in server.js
var User = require('./app/models/user')
```


## 3 - Finally, some routes!

/api/users 				GET 		get all the users
/api/users 				POST		make a new user
/api/users/:user_id		GET 		get a single user
/api/users/:user_id		PUT 		update a single user
/api/users/:user_id		DELETE 		destroy a single user


Just like last time, let's add some middleware that will run every time someone goes to a url that starts with /api

```
//in server.js

apiRouter.use(function(req, res, next){
	// this is going to run EVERY TIME someone goes to a url that starts with /api
	// so we should probably check to see if they are logged in here
	// We'll do that in the next lesson
	// in the meantime, let's just console.log something, so we know it works
	console.log("someone is visiting our API, we should check to see if they are logged in")

	// ...and then we'll let the request continue on to our app:
	next()
})

apiRouter.route('/users')
	.get(function(req, res){
		// send back all the users
	})

	.post(function(req, res){
		// save a user
	})

apiRouter.route('/users/:user_id')
	.get(function(req, res){
		// send back a single user
	})

	.put(function(req, res){
		// update a single user
	})

	.delete(function(req, res){
		// destroy an existing user
	})

```

## 4 - Make our code BEAUTIFUL!

Let's first extract these get, post, put, and delete functions out into a file. These functions are pretty much the same as the index, show, create, update, and delete functions that were in the rails controller, right? So let's try to emulate rails here and make a usersController with all those functions too.

```
// in app/controllers/usersController.js

// First thing's first, we're going to be interacting with the model, so let's make sure we have access to it:

var User = require("../models/User")

// ...and let's just copy each of the functions over from the routes.
// The function that runs on GET /api/users should be called index
// The function that runs on POST /api/users should be called create
// The function that runs on GET /api/users/:user_id should be called show
// The function that runs on PUT /api/users/:user_id should be called update
// The function that runs on DELETE /api/users should be called destroy

function index(req, res){
	User.find(function(err,users){
		if(err) res.send(err)
		res.json(users)
	})
}

function create(req, res){
	// make a new, empty user
	var user = new User()
	// set the empty user's name, username and password --
	// to the name, username, and password that are in the --
	// request's body
	user.name = req.body.name
	user.username = req.body.username
	user.password = req.body.password

	// try to save this new user to the db
	user.save(function(err){
		// if there's an error, send back a response with an error message
		if(err) return res.json({message: "computer says noooo"})
		
		// if there's not an error, tell them they successfully created a new user
		res.json({message: "new user created!"})
	})
}


function show(req,res){
	User.findById(req.params.user_id, function(err, user){
		if(err) res.send(err)
		res.json(user)
	})
}

function update(req, res){
	// grab the user from the database
	User.findById(req.params.user_id, function(err, user){
		// if there's an error, tell the user
		if(err) {
			res.send(err)
		}
		// if the payload has a name, set the found user's name to be equal to it
		if(req.body.name){
			user.name = req.body.name
		}
		// do the same with the username
		if(req.body.username){
			user.username = req.body.username
		}
		// ..and with the password
		if(req.body.password){
			user.password = req.body.password
		}
		// now we've changed the found user, we must remember to save it back to the DB!
		user.save(function(err){
			if(err){
				res.send(err)
			}
			res.json({message: "user updated"})
		})
	})
}

function destroy(req, res){
	// delete the user with the id in the url
	User.remove({_id: req.params.user_id}, function(err, user){
		// tell the user if there is an error
		if(err){
			res.send(err)
		}
		// else, send a success message
		res.json({message: "deleted"})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}

```


And now let's move the routes out to their own file as well

We're going to need express so we can call express.Router. We'll also need access to the User model and the usersController.

```
var express = require('express')
var apiRouter = express.Router()
var usersController = require('../controllers/usersController')
var User = require('../models/User')


apiRouter.use(function(req, res, next){
	// this is going to run EVERY TIME someone goes to a url that starts with /api
	// so we should probably check to see if they are logged in here
	// We'll do that in the next lesson
	// in the meantime, let's just console.log something, so we know it works
	console.log("someone is visiting our API, we should check to see if they are logged in")

	// ...and then we'll let the request continue on to our app:
	next()
})


// set up index/get for api router
apiRouter.route('/users')
	.get(usersController.index)
	// for creating a new user
	.post(usersController.create)

apiRouter.route('/users/:user_id')
	// this is the show action 
	.get(usersController.show)

	// this is the update action
	.put(usersController.update)

	// this is the destroy function
	.delete(usersController.destroy)

module.exports = apiRouter
```


... and finally, let's make sure that our server.js has access to this routes file, and is using it:

```
var apiRouter = require('./app/routes/userRoutes')

app.use('/api', apiRouter) //this should already be there from earlier
```





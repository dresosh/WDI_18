// BASE SETUP
// ==========
var express = require('express') // call express
var app = express() // define our app using express
var bodyParser = require('body-parser') // for getting the body of HTTP POST requests
var morgan = require('morgan') // for logging
var mongoose = require('mongoose') // our ORM for mongo
var User = require('./app/models/User') // require the User model we just made
var apiRouter = require('./app/routes/userRoutes')

mongoose.connect('localhost:27017/men_user_app')

// APP CONFIGURATION
// =================
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

// tell app to use apiRouter when we go to 
// localhost:8080/api
app.use('/api', apiRouter)

// RUN THE SERVER
// ==============
app.listen(8080)
console.log("server is running on port 8080")




var express = require('express'), //returns a function
		app = express(), //call the function -> instantiates the app.
		mongoose = require('mongoose'),
		bodyParser = require('body-parser'),
		apiRouter = require('./app/config/routes'),
		DB = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/men-blog', // connects our local db on port 27017, unless this app is on heroku, and finds env vars for MONGOLABURI
		port = process.env.PORT || 3000;

//body-parser config:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect our DB
mongoose.connect( DB );

//routes config // namespace for api
app.use('/api', apiRouter);

//server 
app.listen(port);
console.log('magic is happening on port ' + port);
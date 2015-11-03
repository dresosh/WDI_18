var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var personRouter = express.Router();
var apiRouter = express.Router();
var quotes = require('./quotes.js').quotes;
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('Hello WDI18, I love you guys!!!!');
})

app.get('/home', function(req, res) {
	res.send("Hey! Welcome to my homepage");
})

//refactored routes using express.Router()
personRouter.route('/')
	.get(function(req, res) {
		res.send("<h1>This is my index page for persons</h1>");	
	})

personRouter.route('/:id')
	.get(function(req, res) {
		res.send("<h1>Person: " + req.params.id +  "</h1>");
	})

//post request for persons

//api for quotes

apiRouter.route('/')
	.get(function(req, res) {
		res.json(quotes)
	})
	.post(function(req, res) {
		console.log('req.body ' + req.body.author + req.body.text );
		quotes.push(req.body);
		res.json(quotes)
	})


apiRouter.route('/random')
	.get(function(req, res) {
		var id = Math.floor(Math.random() * quotes.length);
		var q = quotes[id];
		res.json(q);
	})


// OLD CODE: (was refactored from this):
// app.get('/persons', function(req, res) {
// 	res.send("<html><head></head><body><h1>This is my index page for persons</h1></body></html>");
// })
// app.get('/persons/:id', function(req, res) {
// 	res.send("<html><head></head><body><h1>Person: " + req.params.id +  "</h1></body></html>");
// })


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use('/persons', personRouter);
app.listen(port);
console.log('Server started on ' + port);
var express = require('express');
var app = express();
var personRouter = express.Router();
var apiRouter = express.Router();
var port = process.env.PORT || 2000;

app.get('/home', function(req, res) {
	res.send("This should be the home page");
})

personRouter.route('/')
	.get(function(req, res) {
		res.send("<h1>This is my index page for persons</h1>");	
	})

personRouter.route('/')
	.get(function(req, res) {
		res.send("<h1>Person: " + req.params.id +  "</h1>");
	})


apiRouter.route('/')
	.get(function(req, res) {
		res.json(quotes)
	})
	.post(function(req, res) {
		console.log('req.body ' + req.body.author + req.body.text);
		quotes.push(req.body);
		res.json(quotes)
	})

var quotes = require('./quotes.js').quotes;

apiRouter.route('/random')
	.get(function(req, res) {
		var id = Math.floor(Math.random() * quotes.length);
		var q = quotes[id];
		res.json(q);
	})


app.use(bodyParser.json());
app.uses('/api', apiRouter);
app.user('/persons', personRouter);
app.listen(port);
console.log('Server started on ' + port);
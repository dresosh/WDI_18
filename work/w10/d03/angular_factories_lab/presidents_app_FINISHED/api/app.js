var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/presidents-app');

var routes = require('./config/routes');

app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',routes);

app.listen(8080);
console.log("Abe Lincoln and the gang are hanging out on port 8080")
console.log("Check him out at /api/presidents")

var
  express       = require('express'),
  path          = require('path'),
  logger        = require('morgan')
  cookieParser  = require('cookie-parser'),
  bodyParser    = require('body-parser'),
  app           = express(),
  mongoose      = require('mongoose'),
  User          = require('./models/User');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/authentication-practice')

// Only render errors in development
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.listen(3000)

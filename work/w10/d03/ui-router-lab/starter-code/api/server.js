var
  express = require( "express" ),
  path = require( "path" ),
  cors = require( "cors" ),
  logger = require( "morgan" ),
  bodyParser = require( "body-parser" ),
  app = express(),
  routes = require( "./config/routes" );
  mongoose = require( "mongoose" );

mongoose.connect( "mongodb://localhost:27017/infamous-masterminds" );

app.use( cors() )

app.use( logger( "dev" ) )
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) )

app.use( routes )
app.listen( 3000 )

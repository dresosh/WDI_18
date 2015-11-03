var
  express      = require( "express" ),
  app          = express(),
  mongoose     = require( "mongoose" ),
  passport     = require( "passport" ),
  flash        = require( "connect-flash" ),
  ejsLayouts   = require( "express-ejs-layouts" ),
  morgan       = require( "morgan" ),
  cookieParser = require( "cookie-parser" ),
  bodyParser   = require( "body-parser" ),
  session      = require( "express-session" ),
  config       = require( "./config/config" );

mongoose.connect( "mongodb://localhost/local-authentication-with-passport" )

app.use( morgan( "dev" ) ) 
app.use( cookieParser() )
app.use( bodyParser() )

app.set( "view engine", "ejs" )
app.use( ejsLayouts )
app.set( "views", "./views" )
app.use( express.static( __dirname + "/public" ) )

app.use( session( { secret: "WDI-GENERAL-ASSEMBLY-EXPRESS" } ) )
app.use( passport.initialize() )
app.use( passport.session() )
app.use( flash() )

require( "./config/passport" )( passport )


app.use( function ( req, res, next ) {
  global.user = req.user
  next()
})

var routes = require( "./config/routes" );
app.use( routes );

app.listen( config.port );
console.log( "Listening on port: ", config.port );

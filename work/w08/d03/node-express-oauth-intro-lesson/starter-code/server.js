var
  express        = require( "express" ),
  path           = require( "path" ),
  logger         = require( "morgan" ),
  bodyParser     = require( "body-parser" ),
  app            = express(),
  mongoose       = require( "mongoose" ),
  passport       = require( "passport" ),
  expressSession = require( "express-session" ),
  cookieParser   = require( "cookie-parser" );

// Mongoose Setup
mongoose.connect( "mongodb://localhost:27017/facebook-authentication-app" );

// Middleware
app.use( cookieParser() );
app.use(
	expressSession( {
		secret: "mySecretKey",
		resave: true,
		saveUninitialized: true
	})
);

app.use( passport.initialize() );
app.use( passport.session() );

app.use( logger( "dev" ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

app.set( "views", path.join( __dirname, "views" ) );
app.engine( "ejs", require( "ejs" ).renderFile );
app.set( "view engine", "ejs" );

app.use( express.static( __dirname + "/public" ) );

// Setting up the Passport Strategies
require( "./config/passport" )( passport );

// Add code here:

app.listen( 3000 );

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
  session      = require( "express-session" );



mongoose.connect( "mongodb://localhost/passport-local-authentication" ); 

app.use( morgan( "dev" ) ); 
app.use( cookieParser() );
app.use( bodyParser() );

app.set( "view engine", "ejs" );
app.use( ejsLayouts );
app.set( "views", "./views" );

app.use( session( { secret: "WDI-GENERAL-ASSEMBLY-EXPRESS" } ) ); 
app.use( passport.initialize() );
app.use( passport.session() ); 
app.use( flash() ); 

require( "./config/passport" )( passport );

// Here you should have the route handlers doing the view rendering and calling the passport logic.

app.listen( 3000 );

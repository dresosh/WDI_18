var
  express = require( "express" ),
  router = express.Router(),
  // Parses information from POST
  bodyParser = require( "body-parser" ),
  // Used to manipulate POST methods
  methodOverride = require( "method-override" ),
  passport = require( "passport" ),
  usersController = require( "../controllers/users" ),
  staticsController = require( "../controllers/statics" );

router.route( "/" )
  .get( staticsController.home );

router.route( "/signup" )
  .get( usersController.getSignup )
  .post( usersController.postSignup );

router.route( "/login" )
  .get( usersController.getLogin )
  .post( usersController.postLogin );

router.route( "/logout" )
  .get( usersController.getLogout );

module.exports = router;

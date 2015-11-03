var passport = require( "passport" );


module.exports = {
  // GET /signup
  getSignup: function ( request, response ) {
    response.render( 'signup.ejs', { message: request.flash( "signupMessage" )})
  },
  // POST /signup
  postSignup: function ( request, response ) {
    var signupStrategy = passport.authenticate( "local-signup", {
      successRedirect: "/",
      failureRedirect: "/signup",
      failureFlash: true
    })
    return signupStrategy( request, response );
  },
  // GET /login
  getLogin: function ( request, response ) {
        console.log("hit"); 
    response.render( 'login.ejs', { message: request.flash( 'loginMessage' ) });
  },
  // POST /login 
  postLogin: function ( request, response ) {

  },
  // GET /logout
  getLogout: function ( request, response ) {
  
  },
  // Restricted page
  secret: function ( request, response ) {
  
  }
}

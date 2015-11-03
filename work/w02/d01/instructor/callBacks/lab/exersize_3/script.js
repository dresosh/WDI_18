/*

Make a email and password form that stops submission and validates data.
If the following two rules are not met the form should error, and let the user know which field is not validating and what the rules are to pass in the element with a id of 'errorView'
- Email must be valid (here's the regex pattern we will use: /[a-zA-Z0-9\W]+\@[a-zA-Z0-9]+[\.com|\.org|\.co|\.net]/ )
- Password must be at least eight characters, have one capitol letter (/[A-Z]+/), one lower case letter([a-z]+), one symbol(/\W+/), and one number(/\d/)

Also this project should have a little 'style' if you have time... style.css is here too.


Using Regex Patterns Examples

var email = "thomas.sullivan75@gmail.com";

// -------
if( (/[a-zA-Z0-9\W]+\@[a-zA-Z0-9]+[\.com|\.org|\.co|\.net]/).test(email) ){
  console.log( "Valid Email" );
}
// -------
if( email.search(/[a-zA-Z0-9\W]+\@[a-zA-Z0-9]+[\.com|\.org|\.co|\.net]/) > -1){
  console.log( "Valid Email" );
}
// -------
if( email.match(/[a-zA-Z0-9\W]+\@[a-zA-Z0-9]+[\.com|\.org|\.co|\.net]/) !== null ) {
  console.log( "Valid Email" );
}


*/

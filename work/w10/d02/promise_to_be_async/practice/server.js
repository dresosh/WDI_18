var
  ajax = require( "./ajax" ),
  event1 = ajax.go( { method: "GET", url: "http://www.google.com" } )

event1
  .then( function ( response ) {
  
    console.log( response )
    console.log( "Success1" )
    return ajax.go( { method: "GET", url: "http://www.tjs.com" } )
  
  }).then( function ( response ){
    console.log( response )
    console.log( "Success2" )
    return ajax.go( { method: "GET", url: "http://www.facebook.com" } )
  
  } ).then( function ( response ) {
    console.log( response )  
  })

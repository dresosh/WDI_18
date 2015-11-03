"use strict"
var
  // Loads xhr2 module
  XMLHttpRequest = require( "xhr2" )

// Build module for export
module.exports = {
  go: function ( obj ) {
  
    // obj expects:
    // { method: url: params: }
    // return a new promise that can .then be used as a module
    return new Promise( function ( fulfill, reject ) {
      // instanciates XMLHttpRequest into async
      var async = new XMLHttpRequest()

      // set the method and url we're going to request
      async.open( obj.method, obj.url )
      // what to do when open is done loading
      async.onload = function ( data ) {
        // check 'this' (async) status for 200: it's all good
        if ( this.status === 200 ){
          fulfill( data.currentTarget.response )
        // check if 'this' status is greater than 299, some error + status
        } else if ( this.status > 299 ){
          reject( "Error: #" + this.status )
        // We're not sure what actually happened... console.log
        }else{
          reject( "Unknown Server Error", this )
        }
      }
      // send off the asyncronous request
      async.send()
    })
  }
}

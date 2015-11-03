angular
  .module( "markFilter", [] )
  .filter( "mark", function() {
    return function( input ) {
      if ( input === "checkMark") {
        return '\u2713'
      } else if ( input === "exMark") {
        return '\u2717'
      } else if ( input === "boxMark") {
        return '\u2395'
      } else {
        return input  
      }
    }
  })
  .filter( "money", function () {
    return function ( input ) {
        return "$" + input
    }  
  })

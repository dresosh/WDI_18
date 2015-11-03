//Register Element
Polymer({
  is: "ga-nav",
  ready: function () {
    var self = this
    Array.from( self.querySelectorAll("ga-button") ).forEach( function ( elem ) {
      elem.addEventListener( "mousedown", function ( event ) {
        self.changeView( elem.getAttribute( "route" ) )
      })  
    })
  },
  changeView: function ( route ) {
    Array.from( document.querySelectorAll( "ga-page" ) ).forEach( function ( elem ) {
      elem.classList.add( "hidden" )  
    })
    document.querySelector( "ga-page[view='" + route + "']" ).classList.remove( "hidden" )
  }
})

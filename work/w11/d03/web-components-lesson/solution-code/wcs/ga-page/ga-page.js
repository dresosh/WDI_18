// Register Element
Polymer({
  is:"ga-page",
  ready: function () {
    var route = document.querySelector( "ga-button[active]" ).getAttribute( "route" )
    if ( this.getAttribute( "view" ) === route ) {
      this.classList.remove( "hidden" )
    } else {
       this.classList.add( "hidden" )
    }
  }
})

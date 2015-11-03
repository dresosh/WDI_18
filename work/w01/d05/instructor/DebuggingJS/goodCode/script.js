"use strict"
!( function ( window ){
	var nameList = [ "Kyle", "Leslie", "Adam", "Steve", "Julie", "Andre", "Bryan", "Noah", "Jeff", "Alex", "Greg", "Paul", "Kayla", "Percy" ],
		getName = pickName( nameList ),
		nameBox = document.getElementById( "name" ),
		body = document.getElementsByTagName( "body" )[ 0 ],
		colors = [ "darkRed", "darkGreen", "darkOrange", "darkBlue" ],
		tempArr = []

	function pickName ( list ) {
		return {
			next: function () {
				var index = Math.floor( Math.random() * ( list.length - 1 ) ),
				val = list.splice( index, 1)[ 0 ]
				tempArr.push( val )
				return index < list.length ?
					{ value: val, done: false } :
					{ done: true }
			}
		}
	}

	function build ( nameObj ) {
		body.style.backgroundColor = colors[ Math.floor( Math.random() * ( colors.length-1 ) ) ]
		nameBox.innerHTML = nameObj.value
	}

	function clickHandler ( e ) {
		e.preventDefault()
		var nameObj = getName.next()
		// Reset Namelist & Reset tempArr
		if( nameObj.done ) {
			nameList = tempArr
			tempArr = []
			getName = pickName( nameList )
			nameObj = getName.next()
		}
		build( nameObj )
	}

	// This looks at #nextName button and watches for a 'click' action, and executes the handler
	document.getElementById( "nextName" ).addEventListener( "click", clickHandler )

} )( window );

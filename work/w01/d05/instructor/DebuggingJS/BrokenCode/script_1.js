!( function ( window ){

	var nameList = [ "Kyle", "Leslie", "Adam", "Steve", "Julie" "Andre", "Bryan", "Noah", "Jeff", "Alex", "Greg", "Paul", "Kayla", "Percy" ],
		getName = pickName( nameList ),
		nameBox = document.getElementById( "name" ),
		body = document.getElementsByTagName( "body" )[ 0 ],
		colors = [ "darkRed", "darkGreen", "darkOrange", "darkBlue" ]

	pickName (list) {
		return {
			next: function () {
				var index = Math.floor( Math.random() * list.length )
				return index < list.length ?
					{ value: list[ index ], done: false } ;
					{ done: true }
			}
		}
	}

	build () {
		body.style.backgroundColor = colors[ Math.floor( Math.random() * colors.length ) ]
		nameBox.innerHTML = getName.next().value
	}

	document
		.getElementById( "#nextName" )
		.addEventListener( function ( ) {
			e.preventDefault()
			var nameObj = getName.next()
			if( nameObj.done ) {
				getName = pickName( nameList )
			}
			build()
		} )

} )( window );
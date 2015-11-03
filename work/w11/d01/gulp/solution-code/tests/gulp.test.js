/* Setup the tests in here for... what ever*/
var
	gulp = require( "gulp" ),
	mocha = require( "gulp-mocha" ),
	assert = require( "chai" ).assert,
	foo = 'bar',
	beverages = { tea: ['chai', 'matcha', 'oolong' ] }

describe( "foo", function () {
	it( "Should be a string:", function () {
		assert.typeOf( foo, "string", "foo is a string" )
	})
	it( "Should be equal to `bar`", function () {
		assert.equal( foo, "bar", "foo is equal to `bar`" )
	})
	it( "Should have a length of 3", function () {
		assert.lengthOf( foo,3, "Foo's value has a length of 3" )
	})
})

describe( "beverages", function () {
	describe( "Teas Array", function () {
		it( "Should have a length of 3", function () {
			assert.lengthOf( beverages.tea, 3, "beverages has 3 types of tea")
		})
	})
})
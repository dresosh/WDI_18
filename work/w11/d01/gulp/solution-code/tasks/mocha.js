/* Mocha test runner stuff in here*/
var
   gulp = require( "gulp" ),
   gutil = require( "gulp-util" ),
   mocha = require( "gulp-mocha" )

function runMocha( src ) {
	gutil.log( gutil.colors.yellow( "Running mocha tests on: ", src ) )
	return gulp.src( src )
			.pipe( mocha( { reporter: "spec", ui: "bdd" } ) )
}

gulp.task( "mocha", function () {
	return runMocha( "tests/**/*.test.js" ) 
})

gulp.task( "mocha:watcher", function () {
	return gulp.watch( "tests/**/*.test.js" )
			.on( "change", function ( event ) {
				return runMocha( event.path )
			})
})
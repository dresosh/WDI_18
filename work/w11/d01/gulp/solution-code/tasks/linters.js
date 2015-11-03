/* Linters things go in here... lets load up two of them */
var
	gulp = require( "gulp" ),
	gutil = require( "gulp-util" ),
	jshint = require( "gulp-jshint" ),
	stylish = require( "jshint-stylish" ),
	eslint = require( "gulp-eslint" )

function runLinters ( src, opts ) {
	gutil.log( gutil.colors.green( "JSHint Linting JS files at: ", src ) )
	gulp.src( src )
		.pipe( jshint({ curly: true, eqeqeq: true, asi: true, esnext: true, strict: true, node: true }) )
		.pipe( jshint.reporter( stylish ) )

	gutil.log( gutil.colors.green( "ESLint Linting JS files at: ", src ) )
	gulp.src( src )
		.pipe( eslint({
		      "rules": {
		        "eqeqeq":                       2,
		        "comma-dangle":                 2,
		        "camelcase":                    [ 2, { "properties": "always" } ],
		        "quotes":                       [ 2, "double" ],
		        "curly":                        [ 2, "all" ],
		        "strict":                       [ 2, "global" ],
		        "semi":                         [ 2, "never" ],
		        "space-after-keywords":         [ 2, "always" ],
		        "no-mixed-spaces-and-tabs":     [ 2, "smart-tabs"]
		      }
		    }) 
		)
		.pipe( eslint.format() )
}

gulp.task( "linter", function () {
	runLinters( "www/domain/*" )
})

gulp.task( "linter:watcher", function () {
	gulp.watch( "www/domain/*" )
		.on( "change", function ( event ) {
			//Run on what ever file is in event path
			runLinters( event.path )
		})
})
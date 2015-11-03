/* Nodemon reloader for node server or files goes here */
var
  gulp = require( "gulp" ),
  gutil = require( "gulp-util" ),
  nodemon = require( "gulp-nodemon" )

gulp.task( "nodemon", function () {
	nodemon({
		script: "server/server.js",
		tasks: [ "linter", "less" ]
	})
	.on( "restart", function () {
		gutil.log( gutil.colors.blue( "Node Server Restarting" ) )
	})
})
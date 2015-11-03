/* Lets put the GULP stuff in here */
var
  gulp = require( "gulp" ),
  reqdir = require( "requiredir" ),
  imports = reqdir( "./tasks" )


gulp.task( "run", [ "less", "mocha", "linter", "nodemon" ] )
gulp.task( "watch", [ "less:watcher", "mocha:watcher", "linter:watcher" ] )


gulp.task( "default", [ "run", "watch" ] )
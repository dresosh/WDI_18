# Gulp - An Intro to Automation

### Objectives:
- Use Gulp for:
	- Converting LESS into CSS on file save
	- Mocha test runner w/ Gulp
	- JSHint && ESLint
	- Gulp nodemon


## Code Along - Gulp Setup ( 10 min )
I built out some things in preperation, start by going to the class repository w11/d01.
RUN:
`$ npm install`

Next, lets build out our gulpfile:

```javascript
var
  gulp = require( "gulp" ),
  reqdir = require( "requiredir" ),
  imports = reqdir( "./tasks" )
  
gulp.task( "run", [ "less", "linter", "mocha", "nodemon" ] )
gulp.task( "watch", [ "less:watcher", "linter:watcher", "mocha:watcher" ] )  

gulp.task( "default", [ "run", "watch" ] )
```

## Code Along - LESS Watcher ( 15 min )

Lets watch some LESS files and turn them into CSS:

```javascript
var
  gulp = require( "gulp"),
  gutil = require( "gulp-util"),
  less = require( "gulp-less" ),
  join = require( "path" ).join

function runCompile ( src, dest, opts ) {
  return gulp.src( src )
          .pipe( less( opts ) )
          .pipe( gulp.dest( dest ) )
}

gulp.task('less', function () {
  gutil.log( "Running Less Compression on:", gutil.colors.magenta( join( "less", "*.less" ) ) )
  runCompile( join( "less", "*.less" ), "./css", { compress: true } )
})

gulp.task( "less:watcher", function () {
  gutil.log( "Starting Less Watcher on:", gutil.colors.magenta( join( "less", "*" ) ) )
  return gulp
    .watch( join( "less", "*.less" ) )
    .on( "change", function ( event ){
      var destPath
      if( event.type !== "deleted" ){
        gutil.log( "Less watcher saw change at:", gutil.colors.magenta( event.path ) )
        destPath = event.path.replace( /less\/[\w\-]*\.less/, "/css" )
        return runCompile( event.path, destPath, { compress: true } )
      }
    })
})
```


## Code Along - Mocha Test Runner ( 20 min )

Having some idea what testing is... wouldn't it be nice if test ran every time you saved a file? Lets see what that looks like:

### Lets put together that gulp task file...

```javascript
var
  gulp = require( "gulp" ),
  gutil = require( "gulp-util" ),
  mocha = require( "gulp-mocha" )

function runMocha ( src ) {
  gutil.log( gutil.colors.yellow( "Running mocha tests on: ", src ) )
  return gulp.src( src )
          .pipe( mocha( { reporter: "spec", ui: "bdd" } ) )
}


gulp.task( "mocha", function () {
  return runMocha( "tests/**/*.test.js" )
})

gulp.task( "mocha:watcher", function () {
  return gulp
    .watch( "tests/**/*.test.js" )
    .on( "change", function ( event ) {
      return runMocha( event.path )
    })
})
```

### Now we needsome tests for it to run...

```javascript
var
  gulp = require( "gulp" ),
  mocha = require( "gulp-mocha" ),
  assert = require( "chai" ).assert
  foo = 'bar',
  beverages = { tea: [ 'chai', 'matcha', 'oolong' ] }


describe( "Foo:", function () {
  it( "Should be a string:", function () {
    assert.typeOf( foo, 'string' ) // without optional message
    assert.typeOf( foo, 'string', 'foo is a string' ) // with optional message
  })
  it( "Should be equal to `bar`", function () {
    assert.equal( foo, 'bar', 'foo equal `bar`' )
  })
  it( "Should have a length of 3", function () {
    assert.lengthOf( foo, 3, 'foo`s value has a length of 3' )
  })
})

describe( "Beverages", function () {
  describe( "Teas Array", function () {
    it( "Should have a length of 3", function () {
      assert.lengthOf( beverages.tea, 3, 'beverages has 3 types of tea' )
    })
  })
})
```


## Code Along - Linters ( 20 min )

Linters... as you've all noticed, syntax errors are the bain of our existance. Below are some suggested linting rules.

### As usual setup that gulp task file

```javascript
var
  gulp = require( "gulp" ),
  gutil = require( "gulp-util" ),
  jshint = require( "gulp-jshint" ),
  stylish = require('jshint-stylish'),
  eslint = require( "gulp-eslint" )

function runLinters ( src, opts ) {
  gutil.log( gutil.colors.green( "JSHint Linting JS Files at: ", src ) )
  gulp.src( src )
    .pipe( jshint( { curly: true, eqeqeq: true, asi: true, esnext: true, strict: true, node: true }) )
    .pipe( jshint.reporter( stylish ) )

  gutil.log( gutil.colors.green( "ESLint Linting JS Files at: ", src ) )
  gulp.src( src )
    .pipe( eslint( {
      "rules": {
      	"eqeqeq": 						2,
      	"comma-dangle": 				2,
        "camelcase": 					[ 2, { "properties": "always" } ],
        "quotes": 						[ 2, "double" ],
        "curly": 						[ 2, "all" ],
        "strict": 						[ 2, "global" ],
        "semi": 						[ 2, "never" ],
        "space-after-keywords": 		[ 2, "always" ],
        "no-mixed-spaces-and-tabs": 	[ 2, "smart-tabs"]
      }
    }) )
    .pipe( eslint.format() )
}   
    
gulp.task( "linter", function () {
  runLinters( "www/domain/*" )
})
  
gulp.task( "linter:watcher", function () {
  gulp
    .watch( "www/domain/*" ) 
    .on( "change", function ( event ) {
      runLinters( event.path )
    })
}) 
```

### And now we need something to lint...

```javascript
"use strict"
var
  heart = "<3",
  smile = ":)"

var funcName = function () {
  var looks_good = "LG"
}
```


## Code Along - Nodemon ( 10 min )

We've used nodemon, you know what that is...

### Time to setup that gulp task file

```javascript
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
```


## You Do - Go Lab It ( 60 min )
For the next 50 minutes you and a partners from Project 3 must setup a development environment with the following for your project 3:

- Setup LESS Watcher
- Get mocha running some tests on a controller
- Setup and run JSHint and/or ESLint
- Setup gulp manage nodemon


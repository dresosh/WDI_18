# Intro to `Async` & `Promises`

### Objectives
- Understand what async means for code (non-blocking i/o)
- Build an async callback
- Replace async callbacks with promises


### Pre Knowledge
- Can leverage callbacks in JS
- Understand closures in Scope


## Code Along `Asynchronously` (15 min)

### Think in async
When we make a transaction to the server with a HTTPVerb`(GET|POST|PUT|PATCH|UPDATE|DELETE)` request the server may take time to think before it responds. This is when the server is building the dynamic view with the logic from your controller, model, and any other logic that may be in your view (Like looping over an 'echo' for a collection). This takes time... it may be miiliseconds, but whith JavaScript being Asynchronous and non-blocking we have to manage that. Usually we do this with callbacks, but those can get unruely:

![img](http://seajones.co.uk/content/images/2014/12/callback-hell.png)

So a solution was proposed... let's make something that is not just waiting, but is fulfillment based. Now we haven't had a chance to look at this a lot yet, but we can use JavaScript to make a call to the server 'behind the scenes' with an `XMLHttpRequest` request.

Lets take a look at what that might look like:

**But first:** `npm install xhr2` **in a practice directory somewhere... maybe...** `w07/d04/practice`

```javascript
var
  XMLHttpRequest = require('xhr2'),
  async = new XMLHttpRequest();

async.open( "GET", "http://www.google.com", true );
async.onload = function( data ) {
  if (this.status === 200) {
      console.log( data.currentTarget.response );
    } else if ( this.status > 299 ) {
      console.log( "Error: #" + this.status );
    } else {
      console.log( "Unknown Error" );
    }
};
async.send();
```

### What this might look like if it was modularized so it could be leveraged over and over with callbacks:

```javascript
--ajax.js--
var
  XMLHttpRequest = require('xhr2'),
  async = new XMLHttpRequest();

module.exports = function (obj) {
	//Obj expects:
	// { method: url: params: success: failure: }
	async.open( obj.method, obj.url, true );
	async.onload = function( data ) {
	    if (this.status === 200) {
	      obj.success( data.currentTarget.response );
	    } else if ( this.status > 299 ) {
	      obj.failure( "Error: #" + this.status );
	    } else {
	      obj.failure( "Unknown Error" );
	    }
	};
	async.send();
}
```


####This is how we would use it with callbacks:

```javascript
--events.js--
var
	ajax = require( "./ajax" );
	
ajax({
	method: "GET",
	url: "http://www.google.com",
	params: {},
	success: function ( data ) {
		var addToView = data.currentTarget.response;
		ajax({
			method: "GET",
			url: "http://www.tjs.com",
			params: {},
			success: function ( data1 ) {
				var newAddToView = data1.currentTarget.response;
				ajax({
					method: "GET",
					url: "http://www.facebook.com",
					params: {},
					success: function ( data2 ) {
						var newNewAddToView = data2.currentTarget.response;
					},
					failure: function ( err ){
						console.log( err ) ;
					}
			},
			failure: function ( err ) {
				console.log( err ) ;
			}
	},
	failure: function ( err ) {
		console.log( err ) ;
	}
})
	
```


## Go do it yourself (10 min)

Take the next 10 minutes to build your own asynchronous grab of a website...

**Rememeber:** `npm install xhr2`

```javascript
var
  XMLHttpRequest = require('xhr2'),
  async = new XMLHttpRequest();
```



## `Promise` to code along ( 20 min )

Well that's a mess, and I may want to re-use that because there's a lot going on, and I don't want to write all that every time I want to make a request, and handle the information.

what if we went and hid it somewhere, say in another file:

```javascript
--axaj.js--
var
  XMLHttpRequest = require( 'xhr2' );

module.exports = function ( obj ){
  //Obj expects { url, method, params }
  return new Promise( function ( resolve, reject ) {
    var async = new XMLHttpRequest();
    async.open( obj.method, obj.url, true );
    async.onload = function( data ) {
      if (this.status === 200) {
          resolve( data );
        } else if ( this.status > 299 ) {
          reject( { message: "Something went wrong!", status: this.status, data: data } );
        } else {
          reject( { message: "Unknown Error", status: this.status, data: data } );
        }
    };
    async.send();
  });
};
```

now if we want we can reuse this and chain a `.then` onto it... simple:


```javascript
--events.js--
var
	ajax = require( "./ajax" ),
	event1 = ajax( { method: "GET", url: "http://www.google.com" } ),
	event2 = ajax( { method: "GET", url: "http://www.tjs.com" } );
	
	event1.then( function ( success ) {
   		console.log( success.currentTarget.response );
  	}).catch( console.log.bind( console ) );
  
  	event2.then( function ( success ) {
  		console.log( success.currentTarget.response );
  	}).catch( console.log.bind( console ) );
```

#### Well... what if we wanted something to happen sort of synchronously, or we needed data from a database before we operate or respond?

#### We can do that...

```javascript
--events.js--
var
	ajax = require( "./ajax" ),
	event1 = ajax( { method: "GET", url: "http://www.google.com" } );
	
event1.then( function ( success ) {
	console.log( success.currentTarget.response );
	return ajax( { method: "GET", url: "http://www.tjs.com" } );
}).then( function ( success ) {
	console.log( success.currentTarget.response );
	return ajax( { method: "GET", url: "http://www.facebook.com" } );
}).then( function ( success ) {
	console.log( success.currentTarget.response );
}).catch( console.log.bind( console ) );

-- And so on--
```

## `Promise` yourself (30 min)

#### --Pair up for 30 minutes--

**Work Together -** You must come to agreement on the format of the user, and how data will be transacted. This is your first project as a small team... here are your teams:

```
Noah - Adam
Tali - Paul
Jeff - Julie
Kyle - Andre
Alex - Percy
Kayla - Steve - Greg [Dual Navigator]
```

**Person A -** Build an API endpoint with Node, Express, and MongoDB (Mongoose too). This should handle incoming requests, and have 3 routes. It should be able to create and update and delete users, they can be simple... Don't go wild on the models.

**Person B -** Create some asynchronous requests that add users to the database. You should add at least 5 users, update 2 of those, and delete 1.
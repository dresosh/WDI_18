# Authentication with Angular

##Objectives
SWBAT:

- Explain the role of the server and the client in MEAN authentication

- Understand the factories necessary to fulfil the client's role in authentication

- Use an angular controller and factory to interact with the server's authentication machinery 


## Introduction

Wait - didn't we already do MEAN authentication? What was all that JWT stuff?

Ok, so yes, we DID do a lot of auth stuff so far. Let's review - we built a server that does a few things:

- It does the usual CRUD on users

- It has an api/authenticate route that accepts a username and password, and returns a JWT to the browser if everything is correct

- It has middleware that checks (almost) every request for a JWT. It only fulfils the request if a valid JWT is present. Else, the server returns a message saying there is no valid JWT.


## Server side
I've provided you with a skeleton, into which we will write our angular auth stuff. 

Take a look at the server side stuff (angular_auth_STARTER/server_STARTER) that we made in a previous lesson. Answer these questions with a neighbor:

- in the server.js file, what does this line do?
```
app.use('/api', apiRouter)
```

- Use the code in routes/userRoutes.js to explain what happens when I make a POST request to /api/authenticate (there are three possible outcomes)

- There is a piece of 'middleware' in the userRoutes.js file. What does it do?

- Why do some routes become _before_ this middleware, and some routes come _after_ the middleware?

- What does this route do?
```
apiRouter.route('/me')
	.get(function(req, res){
		res.send(req.decoded)
	})
```


Let's make some postman requests to simulate what we want to achieve on the front-end


##Which factories will we need in order to deal with the JWTs?

We have a bunch of methods that we can wrap up in different factories:

1) A factory whose job it is to save the JWT token in local storage in the browser, and also retrieve it. We will call this the *authTokenFactory*

This factory is just the butler. It does nothing except set the JWT to local storage, and retrieve the JWT from local storage when asked. 

2) A factory whose job it is to intercept every request the browser makes, and attach the JWT to it. We will call this the *authInterceptorFactory*

This factory is the sneaky interceptor. Just as the HTTP request is going out, he tells the butler to get the JWT from local storage, and then he attaches it to the request  

3) A factory whose job it is to make all the requests to the server dealing with logging in or signing up, or getting the current user. We will call this the *authFactory*

This factory is the worker. One of his main jobs is going out to get the JWT, and then asking the butler to put it in local storage when he gets back. 

How will these factories interact with each other and the main controller?

The main controller will only need access to the main worker factory - the authFactory - things like loggin in, and signing up.

What will the authFactory need access to? Well, it will need to authTokenFactory (the butler) to set the JWT into local storage for it after the JWT comes back from the server.

The authTokenInterceptor will also need access to the the authTokenFactory (the butler). Before every request it will ask the authTokenFactory to get the JWT from local storage for it. 


## Let's code this...

In the finished code I've put all three factories in the same file.

```
angular.module('authApp')
.factory('authTokenFactory', authTokenFactory)
authTokenFactory.$inject = ['$window']
function authTokenFactory($window){

	var authTokenFactory = {}

	// get the token
	authTokenFactory.getToken = function(){
		return $window.localStorage.getItem('token')
	}

	// set the token
	authTokenFactory.setToken = function(token){
		if(token){
			$window.localStorage.setItem('token', token)
		} else {
			$window.localStorage.removeItem('token')
		}
	}

	return authTokenFactory
}



// ================================================
// ================================================
// ================================================



angular.module('authApp')
.factory('authInterceptorFactory', authInterceptorFactory)
authInterceptorFactory.$inject = ['$q', '$location', 'authTokenFactory']
function authInterceptorFactory($q, $location, authTokenFactory){

	var authInterceptorFactory = {}
	// attach the token to every request
	authInterceptorFactory.request = function(config){
		var token = authTokenFactory.getToken()
		if(token){
			config.headers['x-access-token'] = token;
		}
		return config
	}

	authInterceptorFactory.responseError = function(response){
		if(response.status == 403){
			$location.path('/login')
		}
		return $q.reject(response)
	}

	// redirect if the token doesn't authenticate

	return authInterceptorFactory
}



// ================================================
// ================================================
// ================================================




angular.module('authApp')
.factory('authFactory', authFactory)
authFactory.$inject = ['$http', '$q', 'authTokenFactory']
function authFactory($http, $q, authTokenFactory){

	var authFactory = {}

	authFactory.index = function(){
		return $http.get('http://localhost:8080/api/users')
	}
	// handle login
	authFactory.login = function(username, password){
		return $http.post('http://localhost:8080/api/authenticate', {
			username: username,
			password: password
		}).then(function(response){
			authTokenFactory.setToken(response.data.token)
			return response
		})
	}

	authFactory.signup = function(username, password){
		return $http.post('http://localhost:8080/api/users', {
			username: username,
			password: password
		})
	}

	// handle logout
	authFactory.logout = function(){
		authTokenFactory.setToken()
	}

	// check if a user is logged in
	authFactory.isLoggedIn = function(){
		if(authTokenFactory.getToken()){
			return true
		} else {
			return false
		}
	}

	// get that user's info
	authFactory.getUser = function(){
		if(authTokenFactory.getToken()){
			return $http.get('http://localhost:8080/api/me')
		} else {
			return $q.reject({message: 'User has no token'})
		}
	}

	return authFactory
}
```

That's a lot of code.

Much of the time, you will use a pre-built angular authentication module that contains all these factories for you (and more!). However, you need to understand what's going on.

MAKE SURE YOU LOAD THIS FILE INTO THE INDEX.HTML or else there'll be hours of tears. 

##Adding the interceptor to our configuration

Before we forget, we need to add the interceptor we wrote into our main app configuration. Angular comes with the ability to have a bunch of interceptors. We just need to remember to add them.

Below, I've added it as another function. In a real production app, I'd probably write a module for my routes, and another module for my configuration, and then just inject then into the main authApp module. 

You could also wrap up the interceptor and the routes into a single function, and then pass that as a single argument to the config function. 

```
angular
	.module('authApp', ['ui.router'])
	.config(interceptor)
	.config(MainRouter)

function interceptor($httpProvider){
	$httpProvider.interceptors.push('authInterceptorFactory')
}

function MainRouter($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html'
		})
		.state('loggedOut', {
			url: '/loggedOut',
			templateUrl: 'templates/home.html'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'templates/signup.html'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'templates/login.html'
		})
}
```

## Using the authFactory in the main controller

```
angular.module('authApp')

.controller('MainController', MainController)

MainController.$inject = ['$state', 'authFactory']

function MainController($state, authFactory){
	var vm = this
	vm.user = {}
	vm.loggedIn = authFactory.isLoggedIn()
	vm.signup = signup
	vm.login = login
	vm.logout = logout
	vm.getUser = getUser

	function logout(){
		$state.go('loggedOut')
		authFactory.logout();
	}

	function getUser(){
		authFactory.getUser()
		.then(function(response){
			console.log(response)
		})
	}

	function signup(){
		authFactory.signup(vm.user.username, vm.user.password)
		.then(function(response){
			if(response.data.success){
				vm.login(vm.user.username, vm.user.password)
			} else {
				vm.error = response.data.message
			}
		})
	}

	function login(){
		authFactory.login(vm.user.username, vm.user.password)
		.then(function(response){
			if(response.data.success){
				$state.go("home")
			} else {
				vm.error = response.data.message
			}
		})
	}

}

```

The key points here are as follows:

- we injected the controller with the main authFactory.

- we also injected it with $state so that we can redirect to other pages easily.



## Making the view reflect whether we are logged in or not

This is the only easy bit of angular authentication.

We can see if someone is logged in using the .isLoggedIn() method we made in the controller.

We can see who the logged in user is with the user variable we defined in the controller.

And lastly, we can logout with the .logout method we also defined in the controller.

```
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" ui-sref="home">Authentication</a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li ng-if="mainCtrl.loggedIn"><a>Hi {{mainCtrl.user.username}}</a></li>
      <li ng-if="!mainCtrl.loggedIn"><a ui-sref="login">Login</a></li>
      <li ng-if="!mainCtrl.loggedIn"><a ui-sref="signup">Sign up</a></li>
      <li ng-if="mainCtrl.loggedIn"><a ng-click="mainCtrl.logout()">Log out</a></li>  
    </ul>
  </div>
</nav>
```

## Checking to see if someone is logged in on every click

This works ok, but not perfectly.

We want to check to see if someone is logged in, and who it is, on every change of state. 

We can do this with a watcher on the $rootScope. The $rootScope is the daddy scope for the entire application. When we talk abouy $scope, we talk about a single controller. Each controller has its own $scope for which it is responsible. Well, the $rootScope is responsible for the entire application. 

We can tell it to watch for a state change anywhere, and run a function whenever this state change happens. In this case we are running two functions anytime anything changes - we are seeing if someone is logged in, then we are getting the user. 

Notice that we had to inject $rootScope into the controller:

```
angular.module('authApp')

.controller('MainController', MainController)

MainController.$inject = ['$state', 'authFactory', '$rootScope']

function MainController($state, authFactory, $rootScope){
	var vm = this
	vm.user = {}
	vm.loggedIn = authFactory.isLoggedIn()
	vm.signup = signup
	vm.login = login
	vm.logout = logout
	vm.getUser = getUser

	$rootScope.$on('$stateChangeStart', function(event, next, current) {
		vm.loggedIn = authFactory.isLoggedIn();	

		authFactory.getUser()
			.then(function(data) {
				vm.user = data.data;
			});	
	});	

	function logout(){
		$state.go('loggedOut')
		authFactory.logout();
		
	}

	function getUser(){
		authFactory.getUser()
		.then(function(response){
			console.log(response)
		})
	}

	function signup(){
		authFactory.signup(vm.user.username, vm.user.password)
		.then(function(response){
			if(response.data.success){
				vm.login(vm.user.username, vm.user.password)
			} else {
				vm.error = response.data.message
			}
		})
	}

	function login(){
		authFactory.login(vm.user.username, vm.user.password)
		.then(function(response){
			if(response.data.success){
				$state.go("home")
			} else {
				vm.error = response.data.message
			}
		})
	}
}

```

##Appendix
If you want to check out a pretty good pre-built angular auth module, check out <a href="https://github.com/lynndylanhurley/ng-token-auth">ng-token-auth</a>


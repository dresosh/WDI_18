angular
	.module('authApp', ['ui.router'])
	.config(MainRouter)

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
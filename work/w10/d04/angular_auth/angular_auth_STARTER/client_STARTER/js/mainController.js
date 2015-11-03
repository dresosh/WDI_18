angular.module('authApp')

.controller('MainController', MainController)

MainController.$inject = []

function MainController(){
	var vm = this
	vm.user = {}
	vm.signup = signup
	vm.login = login
	vm.logout = logout
	vm.getUser = getUser
	vm.loggedIn = false

	function logout(){
		console.log('logging out')
		vm.loggedIn = false
	}

	function getUser(){
		console.log('I"m trying to get the current user')
	}

	function signup(){
		console.log('I should be making a post request to api/users to make a new user with these params', vm.user, ' then automatically logging in')
	}

	function login(){
		console.log('I should be getting a JWT from api/authenticate with these params: ', vm.user)
	}

}

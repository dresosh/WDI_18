
# Angular Factories

### Objectives

SWBAT
- Clean up our controller by using an angular service
- Understand why we might want to extract API calls out into a service

### Intro

Separating server-side and client-side applications means that there has to be something that links the two. _Services_ are the glue between them. Services are the way we contact an API, get back data and pass it to our Angular controllers. The controller then passes that info to our views. That is a good separation of concerns!

Yesterday we used the built-in $http service inside our controller. 

Today we are going to build our own service - one that uses $http again, but that is specifically built for our bowties Api.

## What is an angular service?

Unfortunately, the naming of the 3 types of angular service is a little confusing. 

- Service - These guys are made with the _new_ keyword. It's just like a regular constructor function. You set up the constructor function, give it cool methods that you want to use in your controllers, then instantiate a new object using the _new_ keyword.

- Factory - These guys are made like an object literal. You add cool methods to it, and then simply return that object. This is the most popular kind of service. In fact, you can probably go most of your mean stack career only knowing this kind of service. 

- Provider - to set application-wide settings. 

## Why use a service?
It cleans up our code. The controller _could_ call the api directly, but we prefer to put that type of functionality into factories so that it’s more re-useable and easier to maintain. 

E.g. what if we had multiple controllers that each needed to be able to interact with the same API? It would be much easier if we had a single service/factory that does all the interaction for us. We could then simply use this factory inside each controller (i.e. we would re-using the factory in each controller, and re-usability is a good thing in code!)

It also just makes everything easier to follow - a controller shouldn't be a monstrous file that does loads of things. It should do one thing well - taking care of a single view. 


## How we previously wrote our controller:

```
angular.module('bowtiesApp')

.controller('BowtiesController', BowtiesController)

BowtiesController.$inject = ['bowtiesFactory']

function BowtiesController(bowtiesFactory){
	// variable capture
	var vm = this

	vm.bowties = []

	bowtiesFactory.index()
		.then(function(response){
			vm.bowties = response.data
		}, function(err){
			console.log("ERROR ERROR ERROR")
		})


	vm.addTie = function(){
		$http.post('https://bowties-restful-api.herokuapp.com/api/bowties', {
			material: vm.material, pattern: vm.pattern
		}).then(function(response){
			vm.bowties.push(response.data)
		})
	}

	vm.deleteTie = function(bowtie){
		$http.delete('https://bowties-restful-api.herokuapp.com/api/bowties/' + bowtie.id)
		.then(function(){
			var index = vm.bowties.indexOf(bowtie)
			vm.bowties.splice(index, 1)
		})
	}
}
```

This controller only has three interactions with the API, so it's not too crazy looking. But we should still extract out the API calls to a factory. 

## Let's make a factory

1) Inside the JS folder, make a new file called bowtiesFactory.js

	1a - refer to the bowtiesApp module

	1b - make a factory and inject it with $http

	1c - Write the function that defines the factory's behaviour

	1d - before we forget, load this js file in the index.html head!


It's tricky, so here is the completed version:

```
angular.module('bowtiesApp')

.factory('bowtiesFactory', bowtiesFactory)

bowtiesFactory.$inject = ['$http']

function bowtiesFactory($http){
	
	var bowtiesFactory = {}

	bowtiesFactory.index = function(){
		return $http.get('https://bowties-restful-api.herokuapp.com/api/bowties')
	}

	bowtiesFactory.create = function(bowtie){
		return $http.post('https://bowties-restful-api.herokuapp.com/api/bowties', bowtie)
	}

	bowtiesFactory.destroy = function(bowtie){
		return $http.delete('https://bowties-restful-api.herokuapp.com/api/bowties/' + bowtie.id)
	}

	return bowtiesFactory

}
```

And this is how we refer to it in our controller:

```
angular.module('bowtiesApp')

.controller('BowtiesController', BowtiesController)

BowtiesController.$inject = ['bowtiesFactory']

function BowtiesController(bowtiesFactory){
	// variable capture
	var vm = this

	vm.bowties = []

	bowtiesFactory.index()
		.then(function(response){
			vm.bowties = response.data
		}, function(err){
			console.log("ERROR ERROR ERROR")
		})


	vm.addTie = function(){
		var bowtie = {
			material: vm.material,
			pattern: vm.pattern
		}

		bowtiesFactory.create(bowtie)
		.then(function(response){
			vm.bowties.push(response.data)
		})
	}

	vm.deleteTie = function(bowtie){
		bowtiesFactory.destroy(bowtie)
		.then(function(){
			var index = vm.bowties.indexOf(bowtie)
			vm.bowties.splice(index, 1)
		})
	}
}

```

## Your task... re-factory the criminals app to use a factory

Common mistakes:

- not loading the factory js file in the html head

- not injecting the factory into the controller

- not returning the finished factory at the end of the function that defines it. 




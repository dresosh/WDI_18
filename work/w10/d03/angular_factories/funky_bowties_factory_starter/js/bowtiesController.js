angular.module('bowtiesApp')

.controller('BowtiesController', BowtiesController)

BowtiesController.$inject = ['$http']

function BowtiesController($http){
	// variable capture
	var vm = this

	vm.bowties = []

	$http.get('https://bowties-restful-api.herokuapp.com/api/bowties')
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


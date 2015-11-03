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


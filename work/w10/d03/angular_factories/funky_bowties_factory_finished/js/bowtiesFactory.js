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

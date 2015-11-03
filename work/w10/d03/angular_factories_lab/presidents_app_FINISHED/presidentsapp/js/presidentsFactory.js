angular.module('ThePresidentsApp')

.factory('presidentsFactory', presidentsFactory)

presidentsFactory.$inject = ['$http']

function presidentsFactory($http){

	var presidentsFactory = {}

	var baseUrl = 'http://localhost:8080/api/presidents/'

	presidentsFactory.index = function(){
		return $http.get(baseUrl)
	}

	presidentsFactory.create = function(president){
		return $http.post(baseUrl, president)
	}

	presidentsFactory.destroy = function(president){
		return $http.delete(baseUrl + president._id)
	}

	return presidentsFactory

}
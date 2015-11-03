angular.module('filters', [])
	.filter('length', function() {
	  return function(text) {
	    return ('' + (text || '')).length;
	  }
	})
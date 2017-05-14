(function(){
	'use strict';

	angular.module('data')
	.service('MenuDataService',MenuDataService);

	MenuDataService.$inject = ['$http'];

	function MenuDataService($http){
		var service = this;

		service.getAllCategories = function(){
			var categories = [];
			return $http({method: "GET",url: ("https://davids-restaurant.herokuapp.com/categories.json")})
			.then(function (response) {
				console.log(response.data);
	    		//return response.data;
	  		});
		};
		service.getItemsForCategory = function(categoryShortName){

		};
	}
})();
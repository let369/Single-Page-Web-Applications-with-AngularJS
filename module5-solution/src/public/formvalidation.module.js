(function (){
	'use strict';

	angular.module('public')
	.controller('RegistrationController', RegistrationController);

	RegistrationController.$inject = ['$http']; 

	function RegistrationController($http) {
	  var reg = this;

	  reg.submit = function (itemshortname) {
	  	reg.completed = true;
	  	return $http({method: "GET",url: ("https://let369-module5.herokuapp.com/menu_items/"+ itemshortname +".json")})
		.then(function (response) {
			return response.data.menu_items;
  		},function(response){
  			console.log("error");
  		});
	  };
	}
})();
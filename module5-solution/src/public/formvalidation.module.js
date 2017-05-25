(function (){
	'use strict';

	angular.module('public')
	.controller('RegistrationController', RegistrationController);

	RegistrationController.$inject = ['$http']; 

	function RegistrationController($http) {
	  var reg = this;

	  reg.submit = function (itemshortname) {
	  	$rootScope.itemshortname = itemshortname;
	  	return $http({method: "GET",url: ("https://let369-module5.herokuapp.com/menu_items/"+ itemshortname +".json")})
		.then(function (response) {
			reg.message = "Your information has been saved."
			reg.completed = true;
  		},function(response){
  			reg.message = "No such menu number exists."
  			reg.completed = false;
  		});
	  };
	}
})();
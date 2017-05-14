(function(){
	'use strict';
	
	angular.module('MenuApp')
	.controller('MenuAppController',MenuAppController);

	MenuAppController.$inject = ['categoriesList']
	function MenuAppController(categoriesList){
		var mainList = this;
  		mainList.categoriesList = categoriesList;
  		console.log("Hey ",mainList.categoriesList)
	}
})();
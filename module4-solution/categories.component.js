(function(){
	'use strict';
	
	angular.module('MenuApp')
	.component('categories',{
		templateUrl: 'categories.template.html',
	  	controller: categoriesController,
	  	bindings: {
		    categories: '<'
		}
	})
})();
(function(){
	'use strict';
	
	angular.module('MenuApp')
	.component('items',{
		templateUrl: 'items.html',
	  	controller: itemsController,
	  	bindings: {
		    items: '<'
		}
	})
})();
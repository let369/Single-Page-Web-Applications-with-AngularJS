(function(){
	'use strict';
	
	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'home.template.html'
		})
		.state('categories',{
			url:'/categories',
			controller: 'MenuAppController as mainList',
			templateUrl:'menucategories.template.html',
			resolve:{
				categoriesList:['MenuDataService',function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
		});
	}
})();
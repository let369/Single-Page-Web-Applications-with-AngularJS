(function () {
	'use script';
	angular.model('ShopingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',servicefunction);

	var list1 = [{name: bread, quantity: 2},{name: milk, quantity: 1},{name: beers, quantity: 6}];
	var list2 = [];

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		this.list = ShoppingListCheckOffService.getBuyList();
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		this.list = ShoppingListCheckOffService.getBoughtList();
	}

	function ShoppingListCheckOffService() {
		this.buy = list1;
		this.bought = list2;

		this.buttonfunction = function() {

		}
		this.getBuyList = function () {
			return this.buy;
		};
		this.getBoughtList = function () {
			return this.bought;
		};
	}
})();
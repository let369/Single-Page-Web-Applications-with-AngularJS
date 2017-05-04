(function () {
	'use strict';
	angular.module('ShopingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	var list1 = [{name: 'bread', quantity: 2},{name: 'milk', quantity: 1},{name: 'beer', quantity: 6},{name: 'cheese', quantity: 10},{name: 'coffee', quantity: 2}];
	var list2 = [];

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		this.list = ShoppingListCheckOffService.getBuyList();

		this.buttonfunction = function(ItemIndex) {
			ShoppingListCheckOffService.buttonfunction(ItemIndex);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		this.list = ShoppingListCheckOffService.getBoughtList();
	}

	function ShoppingListCheckOffService() {
		buy = list1;
		bought = list2;

		this.buttonfunction = function(ItemIndex) {
			var item = buy[ItemIndex];
			buy.splice(ItemIndex, 1);
			bought.push(item);
		}

		this.getBuyList = function () {
			return buy;
		};

		this.getBoughtList = function () {
			return bought;
		};
	}
})();
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list = "";
  $scope.msg = "";
  $scope.mycolor = "";
  $scope.bcolor = "";
  $scope.fo = function () {
    var arrayOfStrings = $scope.list.split(',');
    var size = arrayOfStrings.length;
    var count = 0;
    for(var i=0 ; i<arrayOfStrings.length;i++){
      if(arrayOfStrings[i]=="" || arrayOfStrings[i]==" "){
        count++;
      }
    }
    size = size - count;
    if(arrayOfStrings==""){
      $scope.msg = "Please enter data first";
      $scope.mycolor = "red";
      $scope.bcolor = "red";
    }
    else if(size<=3){
      $scope.msg = "Enjoy";
      $scope.mycolor = "green";
      $scope.bcolor = "green";
    }
    else{
      $scope.msg = "Too much!";
      $scope.mycolor = "green";
      $scope.bcolor = "green";
    }
  };
}
})();
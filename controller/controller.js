var app = angular.module('lottery', []);

app.controller('ctrl', function($scope, lottoService) {
  let NUM_OF_POS=6;
  $scope.init = function () {
    $scope.myArr = [];
    $scope.myRes = '';
  };
  $scope.init();

  $scope.function1 = function() {
    if($scope.myArr.length===NUM_OF_POS) return;
    $scope.myArr.push(lottoService.getGeneratedNumber());
    console.log($scope.myArr)
    $scope.myRes = $scope.myArr.join(',');
  }

  /*
  this function return the Array
   */
  $scope.getResults = function ()
  {
    return $scope.myArr.join(', ');
  }

});

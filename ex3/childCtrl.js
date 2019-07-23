module.controller("childCtrl", ChildCtrl)


// DI dependency injection - IOC
function ChildCtrl($scope, $rootScope) {
   

  $rootScope.result_child =  $scope.$parent.total;

}
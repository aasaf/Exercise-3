module.controller("brotherCtrl", BrotherCtrl)


// DI dependency injection - IOC
function BrotherCtrl($scope, $rootScope) {

    $scope.printValue = function() {
        // how to access parent controller value1
        alert($rootScope.total)
    }  

}
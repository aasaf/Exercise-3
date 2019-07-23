
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.name

    $scope.$watch('name', function(name) {
      
        if(name=='asaf')
        {
            alert("Well Done!")
        }

    })
    
}

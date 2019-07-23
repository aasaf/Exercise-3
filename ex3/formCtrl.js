// also works
// angular.module("myTimerApp").controller("timeCtrl", () => { alert("hello from time controller")})

//module.controller("timeCtrl", () => { alert("hello from time controller")})

module.controller("formCtrl", FormCtrl)



// DI dependency injection - IOC
function FormCtrl($scope) {

    let num_a

    let num_b

    let variable

    let total



     $scope.calc = function(variable)
    {
        if(variable =='+') {


            $scope.total = $scope.num_a+ $scope.num_b;
        }
        if(variable =='-') {


            $scope.total = $scope.num_a- $scope.num_b;
        }
        if(variable =='*'){


            $scope.total = $scope.num_a* $scope.num_b;
        }
        if(variable =='/') {

            
            $scope.total = $scope.num_a / $scope.num_b;
        }

    }
}

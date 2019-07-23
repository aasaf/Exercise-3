
module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ]
    
    $scope.addMobile= function(){
        let my_new_mobile = new Mobile({model:$scope.model, color:$scope.color, price:$scope.price})
        $scope.devices.push(my_new_mobile);

    }

    $scope.removeMobile= function(index){
      //  $scope.devices.splice(index,1);
        $scope.devices.splice(index,1).deleteRow(index)
       
    }
}

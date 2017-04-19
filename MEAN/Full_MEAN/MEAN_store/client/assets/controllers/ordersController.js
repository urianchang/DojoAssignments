//: Orders Controller
myApp.controller('ordersController', ['$scope', 'ordersFactory', '$location', function ($scope, ordersFactory, $location) {
    // $scope.friends = [];
    // $scope.error = false;
    $scope.sortType = 'created_at';
    $scope.sortReverse = false;
    var index = function() {
        customersFactory.index(function(data) {
            // console.log(data);
            $scope.customers = data;
        })
    }
    index();
    $scope.create = function() {
        // console.log($scope.newFriend);
        customersFactory.create($scope.newCustomer, function(data) {
            // console.log('newcontroller:', data);
            if (data.name === "ValidationError") {
                $scope.error = true;
                $scope.validationErrors = data.errors;
            } else {
                index();
                // $location.url('/');
            }
        });
    };
    $scope.delete = function(customerObj) {
        // console.log(id);
        $scope.customers.splice($scope.customers.indexOf(customerObj), 1);
        customersFactory.delete(customerObj._id, function(data) {
            // console.log(data);
        });
    };
}]);

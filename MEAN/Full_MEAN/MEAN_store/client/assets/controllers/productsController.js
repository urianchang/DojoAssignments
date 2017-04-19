//: Products Controller
myApp.controller('productsController', ['$scope', 'productsFactory', '$location', function ($scope, productsFactory, $location) {
    // $scope.friends = [];
    // $scope.error = false;
    $scope.sortType = 'product_name';
    $scope.sortReverse = false;
    var index = function() {
        productsFactory.index(function(data) {
            // console.log(data);
            $scope.products = data;
        })
    }
    index();
    $scope.create = function() {
        // console.log($scope.newFriend);
        productsFactory.create($scope.newProduct, function(data) {
            // console.log('newcontroller:', data);
            if (data.name === "ValidationError") {
                $scope.error = true;
                $scope.validationErrors = data.errors;
            } else {
                $scope.newProduct = {};
                index();
                // $location.url('/');
            }
        });
    };
    // $scope.delete = function(customerObj) {
    //     // console.log(id);
    //     $scope.customers.splice($scope.customers.indexOf(customerObj), 1);
    //     customersFactory.delete(customerObj._id, function(data) {
    //         // console.log(data);
    //     });
    // };
}]);

//: Topics Controller
myApp.controller('ordersController', ['$scope', 'ordersFactory', 'customersFactory', 'productsFactory', '$location', function ($scope, ordersFactory, customersFactory, productsFactory, $location) {
    // $scope.friends = [];
    // $scope.error = false;
    $scope.sortType = 'created_at';
    $scope.sortReverse = true;
    $scope.formData = {};
    var index = function() {
        ordersFactory.index(function(data) {
            // console.log(data);
            $scope.orders = data;
        });
        customersFactory.index(function(data) {
            // console.log(data);
            $scope.customers = data;
            $scope.formData.customer = $scope.customers[0];
        });
        productsFactory.index(function(data) {
            // console.log(data);
            $scope.products = data;
            $scope.formData.product = $scope.products[0];
        });
    }
    index();

    //: Helper function - Create array of numbers from a number
    $scope.getNumber = function(num) {
        // console.log(new Array(num));
        return new Array(num);
    };

    $scope.create = function() {
        var orderData = {
                item_quantity : $scope.formData.quantity,
                customer_id : $scope.formData.customer._id,
                product_id : $scope.formData.product._id
        }
        // console.log('factory', orderData);
        ordersFactory.create(orderData, function(data) {
            // console.log('newcontroller:', data);
            if (data.name === "ValidationError") {
                $scope.error = true;
                $scope.validationErrors = data.errors;
            } else {
                $scope.formData = {};
                index();
                // $location.url('/orders');
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

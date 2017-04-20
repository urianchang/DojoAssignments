//: Dashboard Controller
myApp.controller('dashboardController', ['$scope', 'ordersFactory', 'customersFactory', 'productsFactory', '$location', function ($scope, ordersFactory, customersFactory, productsFactory, $location) {
    // $scope.friends = [];
    // $scope.error = false;
    // $scope.sortType = 'created_at';
    // $scope.sortReverse = false;
    // $scope.formData = {};
    var index = function() {
        ordersFactory.index(function(data) {
            // console.log(data);
            $scope.orders = data;
        });
        customersFactory.index(function(data) {
            // console.log(data);
            $scope.customers = data;
            // $scope.formData.customer = $scope.customers[0];
        });
        productsFactory.index(function(data) {
            // console.log(data);
            $scope.products = data;
            // $scope.formData.product = $scope.products[0];
        });
    }
    index();
}]);

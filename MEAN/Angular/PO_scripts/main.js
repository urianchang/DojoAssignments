//: Create module
var myAppModule = angular.module('myApp', []);

//: Create factory attached to module
myAppModule.factory('productFactory', function() {
    var products = [
        {name: 'Keyboard', price: 149.99, quantity: 50 },
        {name: 'Mouse', price: 59.99, quantity: 50 },
        {name: 'Basketball', price: 21.99, quantity: 50 }
    ];
    var factory = {};
    //: Index method to return products
    factory.getAll = function(callback) {
        callback(products);
    }
    //: Add method to add product
    factory.add = function(product) {
        product.quantity = 50;
        products.push(product);
    }
    //: Delete method to remove product
    factory.remove = function(product) {
        products.splice(products.indexOf(product), 1);
    }
    //: Buy method to decrease product quantity by one
    factory.buy = function(product) {
        products[products.indexOf(product)].quantity--;
    }
    //: Return the object
    return factory;
});

//: Product Controller
myAppModule.controller('productController', ['$scope', 'productFactory', function($scope, productFactory){
    $scope.sortType = 'price';
    $scope.sortReverse = true;
    $scope.products = [];
    productFactory.getAll(function (data) {
        $scope.products = data;
    });
    $scope.addProduct = function() {
        if ($scope.newProduct) {
            productFactory.add($scope.newProduct);
            $scope.newProduct = {};
        }
    };
    $scope.deleteProduct = function(product) {
        productFactory.remove(product);
    };
}]);

//: Order controller
myAppModule.controller('orderController', ['$scope', 'productFactory', function($scope, productFactory) {
    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.products = [];
    productFactory.getAll(function (data) {
        $scope.products = data;
    });
    $scope.buyProduct = function(product) {
        productFactory.buy(product);
    };
}]);

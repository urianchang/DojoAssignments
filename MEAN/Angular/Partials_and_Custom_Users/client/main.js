//  inject the ngRoute dependency in the module.
var myApp = angular.module('myApp', ['ngRoute']);

//: Create user factory
myApp.factory('userFactory', function() {
    var people = [
        {first_name: 'Yukihiro', last_name: 'Matsumoto', fav_lang: 'Ruby'},
        {first_name: 'Ryan', last_name: 'Dahl', fav_lang: 'JavaScript'},
        {first_name: 'Brendan', last_name: 'Eich', fav_lang: 'JavaScript'},
        {first_name: 'Urian', last_name: 'Chang', fav_lang: 'Python'}
    ];
    var factory = {};
    //: Index method to return people
    factory.getAll = function(callback) {
        callback(people);
    }
    //: Add method to add person
    factory.add = function(person) {
        people.push(person);
    }
    //: Delete method to remove person
    factory.remove = function(person) {
        people.splice(people.indexOf(person), 1);
    }
    //: Return the object
    return factory;
});

//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/customizeUsers.html',
        controller: 'CustomizeUsersController'
    })
    .when('/users',{
        templateUrl: 'partials/userList.html',
        controller: 'UserListsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

//  build the controllers
myApp.controller('CustomizeUsersController', ['$scope', 'userFactory', function ($scope, userFactory) {
    $scope.sortType = 'first_name';
    $scope.sortReverse = false;
    $scope.people = [];
    userFactory.getAll(function (data) {
        $scope.people = data;
    });
    $scope.addPerson = function() {
        if($scope.newPerson) {
            userFactory.add($scope.newPerson);
            $scope.newPerson = {};
        }
    };
    $scope.delPerson = function(person) {
        userFactory.remove(person);
    };
}]);

myApp.controller('UserListsController', ['$scope', 'userFactory', function ($scope, userFactory) {
    $scope.sortType = 'first_name';
    $scope.sortReverse = false;
    $scope.people = [];
    userFactory.getAll(function (data) {
        $scope.people = data;
    });
}]);

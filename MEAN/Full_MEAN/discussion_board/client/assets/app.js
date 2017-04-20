var myApp = angular.module('myApp', ['ngRoute']);

//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardController'
    })
    .when('/topic/:id', {
        templateUrl: 'partials/topic.html',
        controller: 'topicsController'
    })
    .when('/user/:id', {
        templateUrl: 'partials/user.html',
        controller: 'usersController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

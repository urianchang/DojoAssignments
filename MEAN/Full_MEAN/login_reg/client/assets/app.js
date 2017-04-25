var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

//  use the config method to set up routing:
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'loginController'
    })
    .when('/welcome', {
        templateUrl: 'partials/welcome.html',
        controller: 'homepageController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

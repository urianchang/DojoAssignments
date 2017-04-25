//: Homepage Controller
myApp.controller('homepageController', ['$scope', 'usersFactory', '$location', '$cookies', function ($scope, usersFactory, $location, $cookies) {
    var user = $cookies.get('user');
    if (!user) {
        $location.url('/');
    } else {
        $scope.user = user;
    }
}]);

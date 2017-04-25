//: Homepage Controller
myApp.controller('homepageController', ['$scope', 'usersFactory', '$location', function ($scope, usersFactory, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        $scope.user = usersFactory.user;
    }
}]);

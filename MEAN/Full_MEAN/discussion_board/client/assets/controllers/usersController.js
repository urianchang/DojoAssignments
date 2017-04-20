//: Users Controller
myApp.controller('usersController', ['$scope', 'usersFactory', '$location', '$routeParams', function ($scope, usersFactory, $location, $routeParams) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        var show = function() {
            usersFactory.show($routeParams.id, function(data) {
                // console.log(data);
                if (data.name === "CastError") {
                    $location.url('/dashboard');
                } else {
                    $scope.userinfo = data;
                }
            })
        }
        show();
    }
}]);

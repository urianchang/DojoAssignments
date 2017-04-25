//: Login Controller
myApp.controller('loginController', ['$scope', 'usersFactory', '$location', function ($scope, usersFactory, $location) {
    $scope.error = false;
    $scope.success;
    if (usersFactory.success.length > 0) {
        $scope.success = usersFactory.success.pop().success;
    }
    $scope.login = function() {
        console.log($scope.loginUser);
        usersFactory.login($scope.loginUser, function(data) {
            // console.log('newcontroller:', data);
            if (data.name === "ValidationError") {
                $scope.error = true;
                $scope.loginErrors = data.errors;
            } else {
                // console.log('from new controller: ', data);
                $location.url('/welcome');
            }
        });
    };
    $scope.register = function() {

    };
}]);

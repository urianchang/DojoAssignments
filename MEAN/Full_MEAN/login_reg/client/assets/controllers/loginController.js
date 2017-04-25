//: Login Controller
myApp.controller('loginController', ['$scope', 'usersFactory', '$location', '$route', function ($scope, usersFactory, $location, $route) {
    $scope.error = false;
    $scope.success;
    $scope.newUser = {};
    if (usersFactory.success.length > 0) {
        $scope.success = usersFactory.success.pop().success;
    }
    $scope.login = function() {
        // console.log($scope.loginUser);
        usersFactory.login($scope.loginUser, function(data) {
            // console.log('logincontroller:', data);
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
        // console.log($scope.newUser);
        usersFactory.register($scope.newUser, function(data) {
            // console.log('logincontroller:', data);
            if (data.name === "ValidationError") {
                $scope.error = true;
                $scope.registrationErrors = data.errors;
            } else if (data.code === 11000) {
                $scope.error = true;
                var err = [];
                err.push({message: "Email already exists!"});
                $scope.registrationErrors = err;
            } else {
                $route.reload('/');
            }
        });
    };
}]);

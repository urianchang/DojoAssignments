//: Dashboard Controller
myApp.controller('dashboardController', ['$scope', 'usersFactory', 'topicsFactory', '$location', function ($scope, usersFactory, topicsFactory, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        // console.log('good to go');
        $scope.error = false;
        $scope.sortType = 'created_at';
        $scope.sortReverse = false;
        $scope.user = usersFactory.user;
        var index = function() {
            topicsFactory.index(function(data) {
                // console.log(data);
                $scope.topics = data;
            });
        }
        index();
        $scope.create = function() {
            var newTopic = $scope.newTopic;
            newTopic.user_id = $scope.user._id;
            // console.log(newTopic);
            topicsFactory.create(newTopic, function(data) {
                if (data.name === "ValidationError") {
                    $scope.error = true;
                    $scope.validationErrors = data.errors;
                } else {
                    $scope.newTopic = {};
                    index();
                }
            });
        }
    }
}]);

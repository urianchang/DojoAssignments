//: Topics Controller
myApp.controller('topicsController', ['$scope', 'topicsFactory', 'usersFactory', '$routeParams', '$location', function ($scope, topicsFactory, usersFactory, $routeParams, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        $scope.user = usersFactory.user;
        var index = function() {
            topicsFactory.show($routeParams.id, function(data) {
                // console.log(data);
                $scope.boardpost = data;
            });
        }
        index();

        $scope.createPost = function(param1) {
            // console.log(param1);
            var postInfo = {
                user_id : $scope.user._id,
                topic_id : param1,
                text_body : $scope.newPost,
            }
            // console.log('factory', postInfo);
            topicsFactory.createPost(postInfo, function(data) {
                // console.log('newcontroller:', data);
                if (data.name === "ValidationError") {
                    $scope.error = true;
                    $scope.validationErrors = data.errors;
                } else {
                    $scope.newPost = "";
                    index();
                    // $location.url('/orders');
                }
            });
        };
    }
}]);

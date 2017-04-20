//: Topics Controller
myApp.controller('topicsController', ['$scope', 'topicsFactory', 'usersFactory', '$routeParams', '$location', function ($scope, topicsFactory, usersFactory, $routeParams, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        $scope.user = usersFactory.user;
        $scope.newComment = {};
        $scope.newPost = {};
        //: Get specific board post data
        var index = function() {
            topicsFactory.show($routeParams.id, function(data) {
                // console.log(data);
                $scope.boardpost = data;
            });
        }
        index();
        //: Create post
        $scope.createPost = function(param1) {
            // console.log(param1);
            var postInfo = {
                user_id : $scope.user._id,
                topic_id : param1,
                text_body : $scope.newPost.text_body,
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
        }
        //: Create comment
        $scope.createComment = function(param1) {
            // console.log(param1);
            var commentInfo = {
                user_id : $scope.user._id,
                post_id : param1,
                text_body : $scope.newComment.text_body
            }
            // console.log($scope.newComment);
            topicsFactory.createComment(commentInfo, function(data) {
                // console.log('topics controller:', data);
                if (data.name === "ValidationError") {
                    $scope.error = true;
                    $scope.validationErrors = data.errors;
                } else {
                    $scope.newComment = "";
                    index();
                    // $location.url('/orders');
                }
            });
        }
    }
}]);

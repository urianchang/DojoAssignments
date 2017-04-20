//: Topics Controller
myApp.controller('topicsController', ['$scope', 'topicsFactory', 'usersFactory', '$routeParams', '$location', function ($scope, topicsFactory, usersFactory, $routeParams, $location) {
    if (usersFactory.userstatus === false) {
        $location.url('/');
    } else {
        $scope.error = false;
        $scope.user = usersFactory.user;
        $scope.newPost = {};
        $scope.newComment = {}
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
            // console.log($scope.newComment);
            // $scope.newComment[param1] = {};
            // console.log('$$$', $scope.newComment[param1]);
            // Object.keys(obj).length === 0 && obj.constructor === Object
            if (Object.keys($scope.newComment).length === 0 && $scope.newComment.constructor === Object) {
                $scope.error = true;
                $scope.validationErrors = [{message: "Please add text to the comment"}];
            } else {
                var commentInfo = {
                    user_id : $scope.user._id,
                    post_id : param1,
                    text_body : $scope.newComment[param1].text_body
                }
                // console.log(commentInfo);
                topicsFactory.createComment(commentInfo, function(data) {
                    // console.log('topics controller:', data);
                    if (data.name === "ValidationError") {
                        $scope.error = true;
                        $scope.validationErrors = data.errors;
                    } else {
                        $scope.newComment[param1] = {};
                        index();
                        // $location.url('/orders');
                    }
                });
            }
        }
        //: Upvote post
        $scope.upvote = function(param1) {
            topicsFactory.upvotePost(param1, function(data) {
                index();
            });
        }
        //: Downvote post
        $scope.downvote = function(param1) {
            topicsFactory.downvotePost(param1, function(data) {
                index();
            });
        }
    }
}]);

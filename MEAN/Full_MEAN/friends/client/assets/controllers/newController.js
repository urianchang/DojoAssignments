//: New Friends Controller
myApp.controller('newController', ['$scope', 'friendsFactory', '$location', function ($scope, friendsFactory, $location) {
    // $scope.friends = [];
    var index = function() {
        friendsFactory.index(function(data) {
            // console.log(data);
            $scope.friends = data;
        })
    }
    index();
    $scope.create = function() {
        // console.log($scope.newFriend);
        friendsFactory.create($scope.newFriend, function(data) {
            // console.log('newcontroller:', data);
            $location.url('/');
        });
    };
    $scope.delete = function(friendObj) {
        // console.log(id);
        $scope.friends.splice($scope.friends.indexOf(friendObj), 1);
        friendsFactory.delete(friendObj._id, function(data) {
            // console.log(data);
        });
    };
}]);

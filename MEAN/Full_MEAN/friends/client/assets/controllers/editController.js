//: Edit Friend Controller
myApp.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function ($scope, friendsFactory, $routeParams, $location) {
    friendsFactory.show($routeParams.id, function(returnedData){
        returnedData.birthday = new Date(returnedData.birthday);
        $scope.friend = returnedData;
    });
    $scope.update = function() {
        if ($scope.friend) {
            // $scope.friend._id = $scope.friend._id;
            // console.log($scope.friend);
            friendsFactory.update($scope.friend, function(returnedData) {
                $location.url('/');
            });
        }
    };
}]);

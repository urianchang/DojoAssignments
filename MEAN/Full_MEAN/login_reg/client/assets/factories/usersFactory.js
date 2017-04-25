//: Create user factory
myApp.factory('usersFactory', ['$http', function($http) {
    var factory = {};
    factory.success = [];
    //: Create method
    factory.create = function(newfriend, callback) {
        $http.post('/friends', newfriend).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                if (returned_data.data.success) {
                    factory.success.push(returned_data.data);
                }
                callback(returned_data.data);
            }
        });
    }
    //: Return the object
    return factory;
}]);

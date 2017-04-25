//: Create user factory
myApp.factory('usersFactory', ['$http', function($http) {
    var factory = {};
    factory.success = [];
    //: Login method
    factory.login = function(userLogin, callback) {
        $http.post('/login', userLogin).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                callback(returned_data.data);
            }
        });
    }
    //: Register method
    factory.register = function(newUser, callback) {
        $http.post('/register', newUser).then(function(returned_data) {
            // console.log(returned_data);
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

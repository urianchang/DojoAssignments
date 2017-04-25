//: Create user factory
myApp.factory('usersFactory', ['$http', function($http) {
    var factory = {};
    factory.success = [];
    factory.user = {};
    factory.userstatus = false;
    //: Login method
    factory.login = function(userLogin, callback) {
        $http.post('/login', userLogin).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                //: Need to store user object in factory
                // console.log('factory', returned_data.data);
                if (returned_data.data.email) {
                    factory.userstatus = true;
                    factory.user = returned_data.data;
                }
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

myApp.factory('topicsFactory', ['$http', function($http) {
    var factory = {};
    //: Index method
    factory.index = function(callback) {
        $http.get('/topics').then(function(returned_data) {
            callback(returned_data.data);
        });
    }
    // //: Show method
    // factory.show = function(id, callback) {
    //     $http.get('/friends/' + id).then(function(returned_data) {
    //         callback(returned_data.data);
    //     });
    // }
    //: Create method
    factory.create = function(newtopic, callback) {
        $http.post('/topics', newtopic).then(function(returned_data) {
            if (typeof(callback) == 'function') {
                callback(returned_data.data);
            }
        });
    }
    // //: Update method
    // factory.update = function(friend, callback) {
    //     $http.put('/friends/' + friend._id, friend).then(function(returned_data) {
    //         if (typeof(callback) == 'function') {
    //             callback(returned_data.data);
    //         }
    //     });
    // }
    // //: Delete method
    // factory.delete = function(id, callback) {
    //     $http.delete('/friends/' + id).then(function(returned_data) {
    //         if (typeof(callback) == 'function') {
    //             callback(returned_data.data);
    //         }
    //     });
    // }
    //: Return the object
    return factory;
}]);

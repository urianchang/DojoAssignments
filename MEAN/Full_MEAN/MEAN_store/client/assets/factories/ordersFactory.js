myApp.factory('ordersFactory', ['$http', function($http) {
    var orders = [];
    var factory = {};
    //: Index method
    factory.index = function(callback) {
        $http.get('/orders').then(function(returned_data) {
            orders = returned_data.data;
            callback(orders);
        });
    }
    // //: Show method
    // factory.show = function(id, callback) {
    //     $http.get('/friends/' + id).then(function(returned_data) {
    //         callback(returned_data.data);
    //     });
    // }
    //: Create method
    factory.create = function(neworder, callback) {
        $http.post('/orders', neworder).then(function(returned_data) {
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

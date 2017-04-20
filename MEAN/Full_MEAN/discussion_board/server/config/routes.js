var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var posts = require('../controllers/posts.js');
var comments = require('../controllers/comments.js');

module.exports = function(app){
        //: Login / Register user
    app.post('/user', function(req, res) {
        users.login(req, res);
    });
        //: Show specific user
    app.get('/user/:id', function(req, res) {
        users.show(req, res);
    });
        //: Show all topics
    app.get('/topics', function(req, res) {
        topics.index(req, res);
    });
        //: Add topic
    app.post('/topics', function(req, res) {
        topics.create(req, res);
    });
    //     //: Delete customer
    // app.delete('/customers/:id', function(req, res) {
    //   customers.delete(req, res);
    // });
    //     //: Show all products
    // app.get('/products', function(req, res) {
    //   products.index(req, res);
    // });
    //     //: Add product
    // app.post('/products', function(req, res) {
    //   products.create(req, res);
    // });
    // //: Show all orders
    // app.get('/orders', function(req, res) {
    //     orders.index(req, res);
    // });
    // //: Add order
    // app.post('/orders', function(req, res) {
    //     orders.create(req, res);
    // });
    //     //: Add friend
    // app.post('/customers', function(req, res) {
    //   friends.create(req, res);
    // });
    //     //: Update friend
    // app.put('/friends/:id', function(req, res) {
    //   friends.update(req, res);
    // });
    //     //: Delete friend
    // app.delete('/friends/:id', function(req, res) {
    //   friends.delete(req, res);
    // });
}

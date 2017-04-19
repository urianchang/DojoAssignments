var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');
var products = require('../controllers/products.js');

module.exports = function(app){
        //: Show all customers
    app.get('/customers', function(req, res) {
      customers.index(req, res);
    });
        //: Add customer
    app.post('/customers', function(req, res) {
      customers.create(req, res);
    });
        //: Delete customer
    app.delete('/customers/:id', function(req, res) {
      customers.delete(req, res);
    });
        //: Show all products
    app.get('/products', function(req, res) {
      products.index(req, res);
    });
        //: Add product
    app.post('/products', function(req, res) {
      products.create(req, res);
    });
    //: Show all orders
    app.get('/orders', function(req, res) {
        orders.index(req, res);
    });
    //: Add order
    app.post('/orders', function(req, res) {
        orders.create(req, res);
    });
    //     //: Show specific friend
    // app.get('/friends/:id', function(req, res) {
    //   friends.show(req, res);
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

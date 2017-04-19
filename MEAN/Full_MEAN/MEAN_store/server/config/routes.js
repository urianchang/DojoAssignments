var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');
var products = require('../controllers/products.js');

module.exports = function(app){
        //: Show all friends
    app.get('/friends', function(req, res) {
      friends.index(req, res);
    });
        //: Show specific friend
    app.get('/friends/:id', function(req, res) {
      friends.show(req, res);
    });
        //: Add friend
    app.post('/friends', function(req, res) {
      friends.create(req, res);
    });
        //: Update friend
    app.put('/friends/:id', function(req, res) {
      friends.update(req, res);
    });
        //: Delete friend
    app.delete('/friends/:id', function(req, res) {
      friends.delete(req, res);
    });
}

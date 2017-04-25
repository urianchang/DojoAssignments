var users = require('../controllers/users.js');
module.exports = function(app){
        //: Login
    app.post('/login', function(req, res) {
        users.login(req, res);
    });
        //: Register
    app.post('/register', function(req, res) {
        users.register(req, res);
    });
}

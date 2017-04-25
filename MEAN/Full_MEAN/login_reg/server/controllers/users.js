//: Require mongoose
var mongoose = require('mongoose');
//: Require bcrypt
var bcrypt = require('bcrypt');
//: Retrieve schema from models
var User = mongoose.model('User');

module.exports = {
    login: function(req, res) {
        if (!req.body.password) {
            res.json({name: "ValidationError", errors: [{message: "Need password to log in!"}]})
        } else {
            // console.log('searching');
            User.findOne({email: req.body.email}, function(err, user) {
                if (err) {
                    // console.log(err);
                    res.json(err);
                } else {
                    if (!user) {
                        res.json({name: "ValidationError", errors: [{message: "User not found!"}]});
                    } else {
                        if (bcrypt.compareSync(req.body.password, user.password)) {
                            res.json(user);
                        } else {
                            res.json({name: "ValidationError", errors: [{message: "Incorrect password!"}]})
                        }
                    }
                }
            });
        }
    },
    register: function(req, res) {
        // console.log(req.body);
        if (req.body.password != req.body.confirm_password) {
            res.json({name: "ValidationError", errors: [{message: "Passwords do not match!"}]});
        } else {
            if (req.body.password.length < 4) {
                res.json({name: "ValidationError", errors: [{message: "Password has to be at least 4 characters!"}]})
            } else {
                var user = new User({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    birthday: req.body.birthday,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
                });
                user.save(function(err) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json({success: 'Thank you for registering. Please log in!'});
                    }
                });
            }
        }
    },
}

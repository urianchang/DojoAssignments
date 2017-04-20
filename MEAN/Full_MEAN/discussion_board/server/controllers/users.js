//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var User = mongoose.model('User');

module.exports = {
    login: function(req, res) {
        // console.log(req.body);
        User.findOne({user_name : req.body.user_name}, function(err, user) {
            if (err) {
                res.json(err);  //: Unable to reach database?
            } else {
                if (user === null) {
                    // console.log('create new user');
                    var newUser = new User({
                        user_name: req.body.user_name
                    });
                    newUser.save(function(err) {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json(newUser);
                        }
                    });
                } else {
                    // console.log('user exists');
                    res.json(user);
                }
            }
        });
    },
    // index: function(req, res) {
    //     Customer.find({}, function(err, customers) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(customers);
    //         }
    //     });
    // },
    // create: function(req, res) {
    //     var user = new User({
    //         user_name: req.body.user_name
    //     });
    //     customer.save(function(err) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json({success: true});
    //         }
    //     });
    // },
    // update: function(req,res){
    //     // console.log(req.body);
    //     Customer.update({_id: req.body._id},
    //         {$set: {customer_name: req.body.customer_name}},
    //         { runValidators: true },
    //         function(err) {
    //             if (err) {
    //                 res.json(err);
    //             } else {
    //                 res.json({success: true});
    //             }
    //         }
    //     );
    // },
    // delete: function(req,res){
    //     Customer.remove({_id: req.params.id}, function(err) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json({success: true});
    //         }
    //     });
    // },
    // show: function(req,res){
    //     User.findOne({_id: req.body.user_name}, function(err, user) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(user);
    //         }
    //     });
    // }
}

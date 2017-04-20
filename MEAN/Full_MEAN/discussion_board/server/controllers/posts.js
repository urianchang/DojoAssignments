//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
// var Customer = mongoose.model('Customer');
// var Product = mongoose.model('Product');

module.exports = {
    // index: function(req, res) {
    //     Order.find({})
    //         .populate('_customer')
    //         .populate('_product')
    //         .exec(function(err, orders) {
    //             if (err) {
    //                 res.json(err);
    //             } else {
    //                 res.json(orders);
    //             }
    //         }
    //     );
    // },
    create: function(req, res) {
        console.log(req.body);
        Topic.findOne({_id: req.body.topic_id}, function(err, topic) {
            User.findOne({_id: req.body.user_id}, function(err, user) {
                var newpost = new Post({text_body: req.body.text_body});
                newpost._user = user._id;
                newpost._topic = topic._id;
                topic.posts.push(newpost._id);
                user.posts.push(newpost._id);
                newpost.save(function(err) {
                    if (err) {
                        res.json(err);
                    } else {
                        user.save(function(err) {
                            if (err) {
                                res.json(err);
                            } else {
                                topic.save(function(err) {
                                    if (err) {
                                        res.json(err);
                                    } else {
                                        res.json({success : true});
                                    }
                                });
                            }
                        });
                    }
                });
            });
        });
    },
    // update: function(req,res){
    //     // console.log(req.body);
    //     Friend.update({_id: req.body._id},
    //         {$set: {first_name: req.body.first_name,
    //                 last_name: req.body.last_name,
    //                 birthday: req.body.birthday}
    //         },
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
    //     Friend.remove({_id: req.params.id}, function(err) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json({success: true});
    //         }
    //     });
    // },
    // show: function(req,res){
    //     Friend.findOne({_id: req.params.id}, function(err, friend) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(friend);
    //         }
    //     });
    // }
}

//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
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
        // console.log(req.body);
        User.findOne({_id: req.body.user_id}, function(err, user) {
            Post.findOne({_id: req.body.post_id}, function(err, post) {
                var comment = new Comment({text_body: req.body.text_body});
                comment._user = user._id;
                comment._post = post._id;
                post.comments.push(comment._id);
                user.comments.push(comment._id);
                comment.save(function(err) {
                    if (err) {
                        res.json(err);
                    } else {
                        post.save(function(err) {
                            if (err) {
                                res.json(err);
                            } else {
                                user.save(function(err) {
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

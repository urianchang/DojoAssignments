//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
    index: function(req, res) {
        Topic.find({})
            .populate('_user')
            .exec(function(err, topics) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(topics);
                }
            })
    },
    create: function(req, res) {
        User.findOne({_id: req.body.user_id}, function(err, user) {
            var topic = new Topic({
                title: req.body.title,
                text_body: req.body.text_body,
                category: req.body.category,
                _user: req.body.user_id
            });
            user.topics.push(topic._id);
            topic.save(function(err) {
                if (err) {
                    res.json(err);
                } else {
                    user.save(function(err) {
                        if (err) {
                            res.json(err);
                        } else {
                            res.json({success: true});
                        }
                    });
                }
            });
        });
    },
    // update: function(req,res){
    //     // console.log(req.body);
    //     Product.update({_id: req.body._id},
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
    show: function(req,res){
        Topic.findOne({_id: req.params.id})
            // .populate('_user')
            .populate([
                {
                    path: 'posts',
                    model: 'Post',
                    populate: [
                        {
                            path: '_user',
                            model: 'User'
                        },
                        {
                            path: 'comments',
                            model: 'Comment',
                            populate: {
                                path: '_user',
                                model: 'User'
                            }
                        }
                    ]
                },
                {
                    path: '_user',
                    model: 'User'
                }
            ])
            .exec(function(err, topic) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(topic);
                }
            })
    }
}

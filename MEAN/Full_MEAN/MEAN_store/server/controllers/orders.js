//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Order = mongoose.model('Order');

module.exports = {
    index: function(req, res) {
        Order.find({}, function(err, orders) {
            if (err) {
                res.json(err);
            } else {
                res.json(orders);
            }
        });
    },
    create: function(req, res) {
        var order = new Order({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            birthday: req.body.birthday
        });
        friend.save(function(err) {
            if (err) {
                res.json(err);
            } else {
                res.json({success: true});
            }
        });
    },
    update: function(req,res){
        // console.log(req.body);
        Friend.update({_id: req.body._id},
            {$set: {first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    birthday: req.body.birthday}
            },
            { runValidators: true },
            function(err) {
                if (err) {
                    res.json(err);
                } else {
                    res.json({success: true});
                }
            }
        );
    },
    delete: function(req,res){
        Friend.remove({_id: req.params.id}, function(err) {
            if (err) {
                res.json(err);
            } else {
                res.json({success: true});
            }
        });
    },
    show: function(req,res){
        Friend.findOne({_id: req.params.id}, function(err, friend) {
            if (err) {
                res.json(err);
            } else {
                res.json(friend);
            }
        });
    }
}

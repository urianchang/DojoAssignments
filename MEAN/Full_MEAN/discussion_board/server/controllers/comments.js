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
        Customer.findOne({_id: req.body.customer_id}, function(err, customer) {
            Product.findOne({_id: req.body.product_id}, function(err, product) {
                var order = new Order({item_quantity: req.body.item_quantity});
                order._customer = customer._id;
                order._product = product._id;
                product.product_quantity -= req.body.item_quantity;
                product.orders.push(order._id);
                customer.orders.push(order._id);
                order.save(function(err) {
                    if (err) {
                        res.json(err);
                    } else {
                        product.save(function(err) {
                            if (err) {
                                res.json(err);
                            } else {
                                customer.save(function(err) {
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

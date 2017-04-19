//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');

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
        console.log(req);
        // var order = new Order({
        //     item_quantity : req.body.item_quantity
        // });
        // order._customer = customer._id;
        // order._product = product._id;
        // customer.orders.push(order);
        // product.orders.push(order);
        // order.save(function(err) {
        //     if (err) {
        //         res.json(err);
        //     } else {
        //         res.json({success: true});
        //     }
        // });
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

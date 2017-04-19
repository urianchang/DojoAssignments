//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Customer = mongoose.model('Customer');

module.exports = {
    index: function(req, res) {
        Customer.find({}, function(err, customers) {
            if (err) {
                res.json(err);
            } else {
                res.json(customers);
            }
        });
    },
    create: function(req, res) {
        var customer = new Customer({
            customer_name: req.body.customer_name
        });
        customer.save(function(err) {
            if (err) {
                res.json(err);
            } else {
                res.json({success: true});
            }
        });
    },
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
    delete: function(req,res){
        Customer.remove({_id: req.params.id}, function(err) {
            if (err) {
                res.json(err);
            } else {
                res.json({success: true});
            }
        });
    },
    // show: function(req,res){
    //     Customer.findOne({_id: req.params.id}, function(err, customer) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(customer);
    //         }
    //     });
    // }
}

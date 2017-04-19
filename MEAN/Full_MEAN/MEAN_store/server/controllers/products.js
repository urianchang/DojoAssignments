//: Require mongoose
var mongoose = require('mongoose');
//: Retrieve schema from models
var Product = mongoose.model('Product');

module.exports = {
    index: function(req, res) {
        Product.find({}, function(err, products) {
            if (err) {
                res.json(err);
            } else {
                res.json(products);
            }
        });
    },
    create: function(req, res) {
        var product = new Product({
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            product_quantity: req.body.product_quantity,
            product_image: req.body.product_image
        });
        product.save(function(err) {
            if (err) {
                res.json(err);
            } else {
                res.json({success: true});
            }
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

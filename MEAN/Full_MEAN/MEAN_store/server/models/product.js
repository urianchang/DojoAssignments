//: Require mongoose
var mongoose = require('mongoose');
//: Create Schema
var ProductSchema = new mongoose.Schema({
    product_name : { type: String, required: true, minlength: 4 },
    product_description : { type: String, required: true },
    product_quantity : { type: Number, required: true },
    product_image : { type: String },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Product = mongoose.model('Product', ProductSchema);

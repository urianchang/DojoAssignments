//: Require mongoose
var mongoose = require('mongoose');
//: Create Schema
var OrderSchema = new mongoose.Schema({
    customer_name : { type: String },
    product_name : { type: String },
    item_quantity : { type: Number },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Order = mongoose.model('Order', OrderSchema);

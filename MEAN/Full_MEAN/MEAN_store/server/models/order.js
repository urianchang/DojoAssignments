//: Require mongoose
var mongoose = require('mongoose');
//: Define schema variable
var Schema = mongoose.Schema;
//: Create Schema
var OrderSchema = new mongoose.Schema({
    _customer : { type : Schema.Types.ObjectId, ref : 'Customer' },
    _product : { type : Schema.Types.ObjectId, ref : 'Product' },
    item_quantity : { type: Number },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Order = mongoose.model('Order', OrderSchema);

//: Require mongoose
var mongoose = require('mongoose');
//: Define schema variable
var Schema = mongoose.Schema;
//: Create Schema
var CustomerSchema = new mongoose.Schema({
    customer_name : { type: String, required: true, minlength: 4, unique: true },
    orders : [{ type : Schema.Types.ObjectId, ref : 'Order' }],
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Customer = mongoose.model('Customer', CustomerSchema);

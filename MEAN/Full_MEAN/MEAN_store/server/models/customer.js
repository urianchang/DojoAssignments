//: Require mongoose
var mongoose = require('mongoose');
//: Create Schema
var CustomerSchema = new mongoose.Schema({
    customer_name : { type: String, required: true, minlength: 4, unique: true },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Customer = mongoose.model('Customer', CustomerSchema);

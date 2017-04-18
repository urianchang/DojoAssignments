//: Require mongoose
var mongoose = require('mongoose');
//: Create Schema
var FriendSchema = new mongoose.Schema({
    first_name : { type: String },
    last_name : { type: String },
    birthday : { type: Date },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Friend = mongoose.model('Friend', FriendSchema);

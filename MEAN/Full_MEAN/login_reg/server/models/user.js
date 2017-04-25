//: Require mongoose
var mongoose = require('mongoose');
//: Create Schema
var UserSchema = new mongoose.Schema({
    first_name : { type: String, required: true, minlength: 4 },
    last_name : { type: String, required: true, minlength: 4 },
    birthday : { type: Date, required: true, minlength: 4 },
    email : { type: String, required: true, unique: true, minlength: 4 },
    password : { type: String, required: true, minlength: 4 },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var User = mongoose.model('User', UserSchema);

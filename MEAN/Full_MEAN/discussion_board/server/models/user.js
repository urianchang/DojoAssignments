//: Require mongoose
var mongoose = require('mongoose');
//: Define schema variable
var Schema = mongoose.Schema;
//: Create Schema
var UserSchema = new mongoose.Schema({
    user_name : { type: String, required: true, minlength: 4, unique: true },
    topics : [{ type : Schema.Types.ObjectId, ref : 'Topic' }],
    comments : [{ type : Schema.Types.ObjectId, ref : 'Comment' }],
    posts : [{ type : Schema.Types.ObjectId, ref : 'Post' }],
    created_at : { type: Date, default: Date.now }
});
//: Register schema as a model
var User = mongoose.model('User', UserSchema);

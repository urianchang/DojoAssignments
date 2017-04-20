//: Require mongoose
var mongoose = require('mongoose');
//: Define schema variable
var Schema = mongoose.Schema;
//: Create Schema
var CommentSchema = new mongoose.Schema({
    _post : { type : Schema.Types.ObjectId, ref : 'Post' },
    _user : { type : Schema.Types.ObjectId, ref : 'User' },
    text_body : { type: String, required: true, minlength: 2 },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Comment = mongoose.model('Comment', CommentSchema);

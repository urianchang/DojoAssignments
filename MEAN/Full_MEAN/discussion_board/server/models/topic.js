//: Require mongoose
var mongoose = require('mongoose');
//: Define schema variable
var Schema = mongoose.Schema;
//: Create Schema
var TopicSchema = new mongoose.Schema({
    title : { type: String, required: true, minlength: 2 },
    text_body : { type: String, required: true, minlength: 2 },
    category : { type: String, required: true },
    _user : { type : Schema.Types.ObjectId, ref : 'User' },
    posts : [{ type : Schema.Types.ObjectId, ref : 'Post' }],
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Topic = mongoose.model('Topic', TopicSchema);

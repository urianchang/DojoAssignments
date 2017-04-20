//: Require mongoose
var mongoose = require('mongoose');
//: Define schema variable
var Schema = mongoose.Schema;
//: Create Schema
var PostSchema = new mongoose.Schema({
    _user : { type : Schema.Types.ObjectId, ref : 'User' },
    _topic : { type : Schema.Types.ObjectId, ref : 'Topic' },
    comments : [{ type : Schema.Types.ObjectId, ref : 'Comment' }],
    text_body : { type: String, required: true, minlength: 2 },
    upvote : { type: Number, default: 1 },
    downvote : { type: Number, default: 0 },
    created_at : { type: Date, default: Date.now }
})
//: Register schema as a model
var Post = mongoose.model('Post', PostSchema);

//: Require Express module
var express = require('express');
var app = express();

//: Require Mongoose module
var mongoose = require('mongoose');

//: Require body-parser module
var bodyParser = require('body-parser');

//: Connect to Mongoose DB
mongoose.connect('mongodb://localhost/message_board');

//: Define Schema variable
var Schema = mongoose.Schema;

//: Define Post Schema
var PostSchema = new mongoose.Schema({
    author : { type: String, required: true },
    messageBody : { type: String, required: true },
    comments : [{ type : Schema.Types.ObjectId, ref : 'Comment' }],
    created : { type: Date, default: Date.now }
})

//: Define Comment Schema
var CommentSchema = new mongoose.Schema({
    _post : { type : Schema.Types.ObjectId, ref : 'Post' },
    author : { type: String, required: true },
    commentBody : { type: String, required: true },
    created : { type: Date, default: Date.now }
})

//: Set this schema in our models
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
//: Retrieve this schema from models
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
//: Use native promises
mongoose.Promise = global.Promise;

//: Integrate body-parser with app
app.use(bodyParser.urlencoded({extended: true}));

//: Require path
var path = require('path');

//: Set up static folder Directory
app.use(express.static(path.join(__dirname, './static')));

//: Set up views folder Directory
app.set('views', path.join(__dirname, './views'));

//: Set up View Engine set to EJS
app.set('view engine', 'ejs');

//: ROUTING
    //: Render landing page
app.get('/', function(req, res) {
    Post.find({})
    .populate('comments')
    .exec(function(err, posts) {
        if (err) {
            console.log('unable to reach database');
        } else {
            // console.log(posts);
            res.render('index', {posts : posts});
        }
    });
})
    //: New Message form submission
app.post('/addmessage', function(req, res) {
    console.log("POST DATA", req.body);
    //: Create a new Post
    var post = new Post({author: req.body.username, messageBody: req.body.message });
    //: Try to save new post to DB
    post.save(function(err) {
        if(err) {
            res.render('index', {title: 'you have errors!', errors: post.errors});
        } else {
            res.redirect('/');
        }
    })
})
    //: New comment form submission
app.post('/newcomment/:id', function(req, res) {
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment({ author: req.body.username, commentBody: req.body.message });
        comment._post = post._id;
        post.comments.push(comment);
        comment.save(function(err) {
            post.save(function(err){
                if(err) { console.log('unable to reach server')}
                else { res.redirect('/');}
            })
        })
    })

})

//: Set server to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

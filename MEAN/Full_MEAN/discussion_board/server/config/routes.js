var users = require('../controllers/users.js');
var topics = require('../controllers/topics.js');
var posts = require('../controllers/posts.js');
var comments = require('../controllers/comments.js');

module.exports = function(app){
        //: Login / Register user
    app.post('/user', function(req, res) {
        users.login(req, res);
    });
        //: Show specific user
    app.get('/user/:id', function(req, res) {
        users.show(req, res);
    });
        //: Show all topics
    app.get('/topics', function(req, res) {
        topics.index(req, res);
    });
        //: Add topic
    app.post('/topics', function(req, res) {
        topics.create(req, res);
    });
        //: Show specific topic
    app.get('/topic/:id', function(req, res) {
        topics.show(req, res);
    });
        //: Add post
    app.post('/post', function(req, res) {
        posts.create(req, res);
    });
        //: Add comment
    app.post('/comment', function(req, res) {
        comments.create(req, res);
    });
        //: Upvote post
    app.put('/upvote/:id', function(req, res) {
        posts.upvote(req, res);
    });
        //: Downvote post
    app.put('/downvote/:id', function(req, res) {
        posts.downvote(req, res);
    });
}

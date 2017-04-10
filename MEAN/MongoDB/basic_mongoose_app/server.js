// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require Mongoose
var mongoose = require('mongoose');
var assert = require('assert');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/basic_mongoose');
// Create Mongoose Schema
var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
// Use native promises
mongoose.Promise = global.Promise;
// assert.equal(query.exec().constructor, global.Promise);
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, function(err, users) {
        if (err) {
            console.log("something went wrong with db retrieval");
        } else {
            res.render('index', {users : users});
        }
    })
})
// Add User Request
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.

    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.userName, age: req.body.userAge});

    // Try to save that new user to the database
    user.save(function(err) {
        if(err) {
            console.log("uh-oh: something went wrong");
        } else {
            console.log("successfully added a user!");
            res.redirect('/');
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

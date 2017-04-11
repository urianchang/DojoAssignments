//: Require Express module
var express = require('express');
var app = express();

//: Require Mongoose module
var mongoose = require('mongoose');

//: Require body-parser module
var bodyParser = require('body-parser');

//: Connect to Mongoose DB
mongoose.connect('mongodb://localhost/mongoose_dash');

//: Create Mongoose Schema
var DuckSchema = new mongoose.Schema({
    name : { type: String, required: true },
    gender : { type: String, required: true },
    age : { type: String, required: true },
    description : { type: String, required: true },
    created : { type: Date, default: Date.now }
})
//: Set this schema in our models
mongoose.model('Duck', DuckSchema);
//: Retrieve this schema from models
var Duck = mongoose.model('Duck');
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
    //: Landing page - display all rubber ducks
app.get('/', function(req, res) {
    Duck.find({}, function(err, ducks) {
        if (err) {
            console.log('unable to reach database');
        } else {
            // console.log(ducks);
            res.render('index', {ducks : ducks});
        }
    })
})
    //: Add Rubber Duck page
app.get('/rubberducks/new', function(req, res) {
    res.render('newDuck');
})
    //: Show rubber duck - display information about specific duck
app.get('/rubberducks/:id', function(req, res) {
    var duck_id = req.params.id;
    // console.log("show", req.params.id);
    Duck.find({_id: duck_id}, function(err, ducks) {
        if (err) {
            console.log('unable to reach database');
        } else {
            // console.log(ducks);
            res.render('showDuck', {duck : ducks[0]});
        }
    })
})
    //: New Rubber Duck form submission
app.post('/rubberducks', function(req, res) {
    console.log("POST DATA", req.body);
    //: Create a new Duck
    var duck = new Duck({name: req.body.duckname, gender: req.body.gender, age: req.body.age, description: req.body.details });
    //: Try to save new duck to DB
    duck.save(function(err) {
        if(err) {
            res.render('newDuck', {title: 'you have errors!', errors: duck.errors});
        } else {
            res.redirect('/');
        }
    })
})
    //: Edit rubber duck
app.get('/rubberducks/edit/:id', function(req, res) {
    // console.log("editing", req.params.id);
    var duck_id = req.params.id;
    // console.log("show", req.params.id);
    Duck.find({_id: duck_id}, function(err, ducks) {
        if (err) {
            console.log('unable to reach database');
        } else {
            // console.log(ducks);
            res.render('editDuck', {duck : ducks[0]});
        }
    })
})
    //: Submit edited rubber duck information
app.post('/rubberducks/:id', function(req, res) {
    // console.log("edited", req.params.id);
    var duck_id = req.params.id;
    Duck.update({_id: duck_id}, {$set: {name: req.body.duckname, gender: req.body.gender, age: req.body.age, description: req.body.details }}, function(err) {
        if (err) {
            console.log('unable to reach database');
        } else {
            res.redirect('/');
        }
    })
})
    //: Delete rubber duck
app.post('/rubberducks/destroy/:id', function(req, res) {
    // console.log("Destroy", req.params.id);
    var duck_id = req.params.id;
    Duck.remove({_id: req.params.id}, function(err) {
        if (err) {
            console.log('unable to reach database');
        } else {
            res.redirect('/');
        }
    })
})

//: Set server to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

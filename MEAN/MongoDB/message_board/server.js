//: Require Express module
var express = require('express');
var app = express();

//: Require Mongoose module
// var mongoose = require('mongoose');

//: Require body-parser module
var bodyParser = require('body-parser');

//: Connect to Mongoose DB
// mongoose.connect('mongodb://localhost/mongoose_dash');

//: Create Mongoose Schema
// var DuckSchema = new mongoose.Schema({
//     name : { type: String, required: true },
//     gender : { type: String, required: true },
//     age : { type: String, required: true },
//     description : { type: String, required: true },
//     created : { type: Date, default: Date.now }
// })
//: Set this schema in our models
// mongoose.model('Duck', DuckSchema);
//: Retrieve this schema from models
// var Duck = mongoose.model('Duck');
//: Use native promises
// mongoose.Promise = global.Promise;

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
    res.render('index');
    // Duck.find({}, function(err, ducks) {
    //     if (err) {
    //         console.log('unable to reach database');
    //     } else {
    //         // console.log(ducks);
    //         res.render('index', {ducks : ducks});
    //     }
    // })
})
    //: New Message form submission
app.post('/addmessage', function(req, res) {
    console.log("POST DATA", req.body);
    res.redirect('/');
    //: Create a new Duck
    // var duck = new Duck({name: req.body.duckname, gender: req.body.gender, age: req.body.age, description: req.body.details });
    // //: Try to save new duck to DB
    // duck.save(function(err) {
    //     if(err) {
    //         res.render('newDuck', {title: 'you have errors!', errors: duck.errors});
    //     } else {
    //         res.redirect('/');
    //     }
    // })
})
    //: New comment form submission
app.post('/newcomment/:id', function(req, res) {
    res.redirect('/');
    // console.log("edited", req.params.id);
    // var duck_id = req.params.id;
    // Duck.update({_id: duck_id}, {$set: {name: req.body.duckname, gender: req.body.gender, age: req.body.age, description: req.body.details }}, function(err) {
    //     if (err) {
    //         console.log('unable to reach database');
    //     } else {
    //         res.redirect('/');
    //     }
    // })
})

//: Set server to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

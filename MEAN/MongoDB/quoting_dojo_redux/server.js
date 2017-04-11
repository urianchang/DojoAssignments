//: Require Express module
var express = require('express');
var app = express();

//: Require Mongoose module
var mongoose = require('mongoose');

//: Require body-parser module
var bodyParser = require('body-parser');

//: Connect to Mongoose DB
mongoose.connect('mongodb://localhost/quoting_dojo');

//: Create Mongoose Schema
var QuoteSchema = new mongoose.Schema({
    name : { type: String, required: true, minlength: 3 },
    quote : { type: String, required: true, maxlength: 20 },
    date : { type: Date, default: Date.now }
})
//: Set this schema in our models as 'Quote'
mongoose.model('Quote', QuoteSchema);
//: Retrieve this schema from models as 'Quote'
var Quote = mongoose.model('Quote');
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
    //: Landing page
app.get('/', function(req, res) {
    res.render('index');
})
    //: Add Quote
app.post('/quotes', function(req, res) {
    // console.log("POST DATA", req.body);
    //: Create a new Quote
    var quote = new Quote({name: req.body.author, quote: req.body.quote});

    //: Try to save new quote to DB
    quote.save(function(err) {
        if(err) {
            res.render('index', {title: 'you have errors!', errors: quote.errors});
        } else {
            res.redirect('/quotes');
        }
    })
})
    //: Quotes page
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if (err) {
            console.log("unable to reach database");
        } else {
            // console.log(quotes);
            res.render('quotes', {quotes : quotes});
        }
    }).sort({date : -1})    // Sort by descending order
})

//: Set server to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

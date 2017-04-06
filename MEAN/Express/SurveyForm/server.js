//: Ride the express train
var express = require('express');
var app = express();

//: Use path for directories
var path = require('path');

//: For body-parser (POST data)
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//: For files in the static folder
app.use(express.static(path.join(__dirname, "./static")));

//: Set up EJS and Views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//: Save survey data as object
var surveyData = {};

//: ROUTING
    //: Landing page
app.get('/', function(req, res) {
    // res.send("<h1>SUP</h1>");
    res.render("index");
});
    //: Results page
app.get('/result', function(req, res) {
    // res.send("<h1>RESULTS GO HERE</h1>");
    res.render("result", {surveyData : surveyData});
});
    //: Form submission (POST)
app.post('/formSubmit', function(req, res) {
    // console.log("POST DATA:", req.body);
    surveyData = req.body;
    // console.log(surveyData.username);
    res.redirect('/result');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});

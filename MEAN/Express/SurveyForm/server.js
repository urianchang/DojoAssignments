var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));




app.get('/', function(req, res) {
    res.send("<h1>SUP</h1>");
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});

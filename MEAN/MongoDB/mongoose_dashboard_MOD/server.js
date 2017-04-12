//: Require Express module
var express = require('express');

//: Require path
var path = require('path');

//: Create the express app
var app = express();

//: Require body-parser module
var bodyParser = require('body-parser');

//: Integrate body-parser with app
app.use(bodyParser.urlencoded({extended: true}));

//: Set up static folder Directory
app.use(express.static(path.join(__dirname, './client/static')));

//: Set up views folder Directory
app.set('views', path.join(__dirname, './client/views'));

//: Set up View Engine set to EJS
app.set('view engine', 'ejs');

//: Require mongoose config file which does the rest for us
require('./server/config/mongoose.js');

//: Store the routes function in a variable
var routes_setter = require('./server/config/routes.js');

//: Invoke the routes function and pass it the app variable
routes_setter(app);

//: Set server to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

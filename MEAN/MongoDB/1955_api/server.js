// require express and path
var express = require("express");
var path = require("path");

// create the express app
var app = express();

// require bodyParser and configure it to read JSON
var bodyParser = require("body-parser");
app.use(bodyParser.json());

//: Don't need to render views

//: Require mongoose config file which does the rest for us
require('./server/config/mongoose.js');

//: Store the function in a variable
var routes_setter = require('./server/config/routes.js');

//: Invoke the function stored in routes_setter and pass it the app variable
routes_setter(app);

// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})

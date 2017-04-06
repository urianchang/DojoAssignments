//: Load the express module
var express = require('express');

//: Invoke express and store the resulting application in a variable
var app = express();

//: Use app to handle requests
app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>");
})

//: This line tells server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));

//: Set the location where express will look for the ejs views
app.set('views', __dirname + '/views');

//: Set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

//: Add route to display list of Users
app.get("/users", function (request, response){
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

//: Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
    // console.log(__dirname);
    // C:\Users\UC\Desktop\DojoAssignments\MEAN\Express\hello_express
})

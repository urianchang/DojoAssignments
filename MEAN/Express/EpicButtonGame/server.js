//: Require express and path
var express = require('express');
var path = require('path');

//: Create express app
var app = express();

//: For static content
app.use(express.static(path.join(__dirname, "./static")));

//: Set up EJS and Views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//: ROUTING
    //: Landing page
app.get('/', function(req, res) {
    // res.send("<h1>Sup Y'all</h1>");
    res.render("index", {count : buttonPushed});
});

//: Tell Express app to listen on port 8000
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

//: Keep track of how many times the button has been pressed
var buttonPushed = 0;

//: Add sockets to the website
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
    console.log("New challenger has joined: " + socket.id);
    socket.on("button_pushed", function() {
        buttonPushed++;
        io.emit('update_counter', {count : buttonPushed});
    });
    socket.on("reset_counter", function(){
        buttonPushed = 0;
        io.emit('update_counter', {count : buttonPushed});
    })
});

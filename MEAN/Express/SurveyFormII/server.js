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
    res.render("index");
});

//: Tell Express app to listen on port 8000
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

//: Add sockets to the website
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket) {
    console.log("Sockets enabled");
    console.log(socket.id);
    socket.on("posting_form", function (data) {
        var receivedData = data;
        var number = Math.floor((Math.random()*1001)+1);
        // console.log(receivedData);
        socket.emit('random_number', number);
        socket.emit('updated_message', receivedData);
    })
});

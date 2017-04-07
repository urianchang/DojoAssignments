var express = require("express");
var app = express();
var users= {};
var chat = [];
var temp;

var server = app.listen(8000, function() {
console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
   console.log(socket.id);
   socket.on("got_a_new_user", function (data){
       users[socket.id] = data;
       chat.push(data+" has joined the chat!");
       io.emit('new_user', {user: data});
   })
   socket.on("new_message", function (data){
       var name = users[socket.id]
       chat.push(data);
       io.emit('update_message', data);
   })
   socket.on('disconnect', function () {
       temp = users[socket.id];
       delete users[socket.id];
       var count = 0;
       for (var i in users) {
           if (users.hasOwnProperty(i)) count++;
       }
       if (count == 0){
           chat = [];
       }
       io.emit('disconnect_user', temp);
   })
   socket.on("user_left", function (data){
       chat.push(data+" has left the chat!");
   })
})

app.get('/', function (req, res){
 res.render('index', {messages: chat});
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));


// var express = require("express");
// var app = express();
//
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use(express.static(__dirname + "/static"));
//
// app.get('/', function (req, res){
//   res.render('index');
// });
//
// var users= {};  //List of users in the chat
// var chatHistory = []; //Chat history
//
// var server = app.listen(8000, function() {
//     console.log("listening on port 8000");
// });
// var io = require('socket.io').listen(server);
//
// io.sockets.on('connection', function (socket) {
//     console.log("new user joined");
//     socket.on("got_a_new_user", function (data){
//         users[socket.id] = data
//         console.log(users);
//         io.emit('new_user');
//     })
//     socket.on("new_message", function (data){
//         var name = users[socket.id]
//         io.emit('update_message', {message: data, name: name});
//     })
// })
//
// io.sockets.on('disconnect', function (socket) {
//     console.log(socket.id);
//     io.emit('disconnect_user');
// })


// //: Require express and path
// var express = require('express');
// var path = require('path');
//
// //: Create the express app
// var app = express();
//
// //: For static content
// app.use(express.static(path.join(__dirname, "./static")));
//
// //: Set up EJS and Views folder
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
//
// //: ROUTING
//     //: Landing page
// app.get('/', function(req, res) {
//     res.render("index", {data : 0});
// });
//
// //: Tell Express app to listen on port 8000
// var server = app.listen(8000, function() {
//     console.log("listening on port 8000");
// });
//
// var chatMembers = {};
//
// //: Add sockets to the website
// var io = require('socket.io').listen(server);
// io.sockets.on('connection', function(socket) {
//     console.log("New user has joined: " + socket.id);
//     socket.on("add_user", function(data) {
//         chatMembers[data] = socket.id;
//         socket.emit("user_confirmed");
//     });
//     socket.on("reset_counter", function(){
//
//     });
// });

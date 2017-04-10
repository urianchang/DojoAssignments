//: Requirements
var express = require('express');
var path = require('path');

var app = express();

var server = app.listen(8080);
console.log('Server running on port 8080');

var io = require('socket.io').listen(server);

// routing
app.get('/', function (req, res) {
  res.render('index');
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"));

//: usernames which are currently connected to the chat
var users = [];
//: store messages in a variable
var messages = [];

io.sockets.on('connection', function (socket) {

    socket.on('page_load', function(player) {
        console.log("someone has joined");
        //: Get info about new user
        var new_user = {}
        new_user[socket.id] = player.name;
        new_user['player_id'] = users.length + 1;
        users.push(new_user);
        //: Send player id to user
        socket.emit('player_id', {player_id : new_user.player_id})
        console.log("all_users: ", users);
        //: Send chat messages to user
        socket.emit('load_messages', {messages : messages});
    });

    //: Got a new message
    socket.on('new_message', function(data) {
        console.log("got a new message");
        messages.push(data.message);
        io.emit('post_new_message', {new_message : messages[messages.length-1]});
    });

    //: Pacman 1 moved
    socket.on('move_pac1', function(data) {
        console.log('pacman1 moved');
        console.log(data);
        io.emit('all_move_pac1', data);
    });

    //: Pacman 2 moved
    socket.on('move_pac2', function(data) {
        console.log('pacman2 moved');
        io.emit('all_move_pac2', data);
    });

    //: Update the score
    socket.on('update_score', function(data) {
        console.log('need to update the scoreboard');
        io.emit('execute_update_score', data);
    })

});

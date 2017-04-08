var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,2,1,1,2,2,1,1,2,2,2,1,1,1,1,2,2,1,1,2,1,1,2,1,1,2,2,1,1,2,2,2,1,2],
    [2,1,1,1,1,2,1,2,1,1,2,1,2,1,1,1,1,1,2,1,1,2,1,2,1,1,2,1,2,1,1,2,1,1,2,1,1,2],
    [2,1,1,1,1,2,1,2,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,2,1,2,1,1,2,1,1,2,1,1,2],
    [1,1,1,1,1,2,1,2,1,1,2,1,2,2,2,1,1,1,2,1,1,1,1,2,2,2,2,1,2,1,1,2,1,1,2,1,1,1],
    [1,1,1,1,1,2,1,2,1,1,2,1,2,2,2,1,1,1,2,1,1,1,1,2,2,2,2,1,2,1,1,2,1,1,2,1,1,1],
    [2,1,2,1,1,2,1,2,1,1,2,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,2,1,2,1,1,2,1,1,2,1,1,2],
    [2,1,2,1,1,2,1,3,1,1,2,1,2,1,1,1,1,1,2,1,1,2,1,2,1,1,2,1,2,1,1,3,1,1,2,1,1,2],
    [2,1,1,2,2,1,1,1,2,2,1,1,2,2,2,1,1,1,1,2,2,1,1,2,1,1,2,1,1,2,2,1,1,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var score = 0;

var pacman = {
    x: 1,
    y: 1
}

function displayWorld(){
    var output = '';

    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='coin'></div>";
            else if(world[i][j] == 3)
                output += "<div class='cherry'></div>";
            else if(world[i][j] == 0)
                output += "<div class='empty'></div>";
            //output = output + world[i][j];
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function displayPacmanStart(){
    document.getElementById('pacman').style.top = pacman.y*55.5+"px";
    document.getElementById('pacman').style.left = pacman.x*32+"px";
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

document.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

displayWorld();
displayPacman();
displayScore();

document.onkeydown = function(e){
    //document.getElementById('pacman').style.left = 50+"px";
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2 && pacman.x == 0){
        document.getElementById('pacman').style.transform = "rotate(-180deg)";
        pacman.x = world[0].length-1;
    }
    else if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2 && pacman.x > 0){
        document.getElementById('pacman').style.transform = "rotate(-180deg)";
        // $('img#pacman').css({'-webkit-transform' : 'rotate(-180deg)', /* Chrome, Safari, Opera */
//                   			'-moz-transform' : 'rotate(-180deg)',
//                   			'-ms-transform' : 'rotate(-180deg)', /* IE 9 */
//                   			'transform' : 'rotate(-180deg)'})
        pacman.x--;
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2 && pacman.x == world[0].length-1){
        document.getElementById('pacman').style.transform = "none";
        pacman.x = 0;
    }
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
        document.getElementById('pacman').style.transform = "none";
        pacman.x++;
    }
    else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2 && pacman.y > 0){
        document.getElementById('pacman').style.transform = "rotate(-90deg)";
        pacman.y--;
    }
    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = "rotate(90deg)";
        pacman.y++;
    }

    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score+=10;
        displayWorld();
        displayScore();
    }
    else if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score+=50;
        displayWorld();
        displayScore();
    }
    //console.log(e.keyCode);
    displayPacman();
}



var socket = io.connect('http://localhost:8080');

// on connection to server, ask for user's name with an anonymous callback
socket.on('connect', function(){
    // call the server-side function 'adduser' and send one parameter (value of prompt)
    // socket.emit('adduser', prompt("What's your name?"));
});

// listener, whenever the server emits 'updatechat', this updates the chat body
socket.on('updatechat', function (username, data) {
    $('#conversation').append('<b>'+username + ':</b> ' + data + '<br>');
});

// listener, whenever the server emits 'updaterooms', this updates the room the client is in
socket.on('updaterooms', function(rooms, current_room) {
    $('#rooms').empty();
    $.each(rooms, function(key, value) {
        if(value == current_room){
            $('#rooms').append('<div>' + value + '</div>');
        }
        else {
            $('#rooms').append('<div><a href="#" onclick="switchRoom(\''+value+'\')">' + value + '</a></div>');
        }
    });
});

function switchRoom(room){
    socket.emit('switchRoom', room);
}

// $(document).ready(function() {
// on load of page
$(function(){
    // when the client clicks SEND
    $('#datasend').click( function() {
        var message = $('#data').val();
        $('#data').val('');
        // tell server to execute 'sendchat' and send along one parameter
        socket.emit('sendchat', message);
    });

    // when the client hits ENTER on their keyboard
    $('#data').keypress(function(e) {
        if(e.which == 13) {
            $(this).blur();
            $('#datasend').focus().click();
        }
    });
});
// })

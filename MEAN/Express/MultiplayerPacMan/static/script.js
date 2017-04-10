pacmans_count = 0;
this_player_name = prompt("Please enter your name:");
this_player_id = 0;

//: When user loads the page
io = io.connect();
io.emit('page_load', {name : this_player_name});

//: Get player ID from server
io.on('player_id', function(player_data) {
    this_player_id = player_data.player_id;
});

//: Submit new message
$('#new_message').submit(function () {
    io.emit('new_message', {message: this_player_name + " says: " + $('#message').val()});
    $('#message').val("");
    return false;
})

//: Load messages
io.on('load_messages', function(data) {
    var chat_history = "";
    for (var i = 0; i < data.messages.length; i++) {
        chat_history += "<p>" + data.messages[i] + "</p>";
    }
    $('#message_board').append(chat_history);
});

//: Got a new message
io.on('post_new_message', function(data) {
    $('#message_board').append("<p>" + data.new_message + "</p>");
});

function PacMan(initial_x, initial_y) {
    var that = this;
    //initialize method to initiliaze the pacman's position and direction
    var initialize = function()
    {
        that.position = { x: initial_x, y: initial_y }
        that.direction = 1;
        that.score = 0;
        pacmans_count = pacmans_count + 1
    }

    var restore_background = function(prev_x, prev_y){
        var element_to_reset = '#pac_'+(parseInt(that.position.y)+prev_y)+"_"+(parseInt(that.position.x)+prev_x)

        $(element_to_reset)
            .attr('src', '/images/w0.png')
            .removeClass("pac"+this_player_id);

        return element_to_reset;
    }

    //method that moves the pacman to the left
    this.move_left = function(pacman_id)
    {
        //restore_background();
        this.position.x -= 1;
        this.direction = 2;
        this.display(pacman_id, 1, 0);
    }

    //method that moves the pacman to the right
    this.move_right = function(pacman_id)
    {
        //restore_background();
        this.position.x += 1;
        this.direction = 4;
        this.display(pacman_id, -1, 0);
    }

    //method that moves the pacman up
    this.move_up = function(pacman_id)
    {
        //restore_background();
        this.position.y -= 1;
        this.direction = 3;
        this.display(pacman_id, 0, 1);
    }

    //method that moves the pacman down
    this.move_down = function(pacman_id)
    {
        //restore_background();
        this.position.y += 1;
        this.direction = 1;
        this.display(pacman_id, 0, -1);
    }

    //display method returns a number based on the direction of the pacman
    this.display = function(pacman_id, prev_x, prev_y)
    {
        if(this.position.y > 15)
            this.position.y = 0
        if(this.position.y < -1)
            this.position.y = 15

        //alert(this.position.x)
        if(this.position.x > 14){
            this.position.x = 0
        }
        if(this.position.x < 0){
            this.position.x = 15
        }

        pac_element = '#pac_'+this.position.y+"_"+this.position.x;
        pac_image = '/images/'+this.direction+'.jpg';
        pac_class = 'pac'+this_player_id;

        restored = restore_background(prev_x, prev_y);

        $(pac_element)
            .attr('src', pac_image)
            .addClass(pac_class);

        if(pacman_id == 1){
            io.emit("move_pac"+this_player_id, {
                pac_element: '#pac_'+this.position.y+"_"+this.position.x,
                pac_image: '/images/'+this.direction+'.jpg',
                pac_class: 'pac'+this_player_id,
                to_restore: restored
            })
        }

        if(pacman_id == 2){
            io.emit("move_pac"+this_player_id, {
                pac_element: '#pac_'+this.position.y+"_"+this.position.x,
                pac_image: '/images/'+this.direction+'.jpg',
                pac_class: 'pac'+this_player_id,
                to_restore: restored
            })
        }

        io.on("all_move_pac1", function(data){
            $(data.to_restore).attr('src', '/images/w0.png')

            //console.log(data);
            $(data.pac_element)
            .attr('src', data.pac_image)
            .addClass(data.pac_class);
        })

        io.on("all_move_pac2", function(data){
            $(data.to_restore).attr('src', '/images/w0.png')

            //console.log(data);
            $(data.pac_element)
            .attr('src', data.pac_image)
            .addClass(data.pac_class);
        })
    }

    initialize();
}

function GameLoop() {
    var world = {
        width: 15,
        height: 15
    };

    // map coordinates
    var map = [
        0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,
        0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,
        0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,
        0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,
        0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,
        0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,
        0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,
        0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,
        0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,
        0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,
        0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,
        0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,
        0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,
        0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,
        0,1,1,1,1,1,1,0,0,0,0,0,0,0,0
    ];

    function populate_empty_with_coin()
    {
        for(var ctr = 0; ctr < map.length; ctr++)
        {
            if(map[ctr] == 0){
                map[ctr] = 2;
            }
        }
    }

    //let's display the world map
    function drawMap()
    {
        for(row = 0; row < world.height; row++)
        {
            for(column = 0; column < world.width; column++)
            {
                if(map[row*world.height+column] == 0)
                    $('#game_world').append("<img id='pac_"+row+"_"+column+"' src='/images/w0.png' />");
                else if(map[row*world.height+column] == 1)
                    $('#game_world').append("<img id='pac_"+row+"_"+column+"' src='/images/w1.png' />");
                else if(map[row*world.height+column] == 2)
                    $('#game_world').append("<img id='pac_"+row+"_"+column+"' src='/images/w2.png' />");
            }
            $('#game_world').append('<br />');
        }
    }

    var pacman = new PacMan(3,3);
    var pacman2 = new PacMan(3,12);

    $(document).keydown(function(e){
        // e.preventDefault();

        //player 1
        if(this_player_id == 1){
            if(e.keyCode == 37)
            {
                if(map[pacman.position.y*world.width+pacman.position.x-1] != 1)
                    pacman.move_left(this_player_id);
            }
            else if(e.keyCode == 39)
            {
                if(map[pacman.position.y*world.width+pacman.position.x+1] != 1)
                    pacman.move_right(this_player_id);
            }
            else if(e.keyCode == 38)
            {
                if(map[(pacman.position.y-1)*world.width+pacman.position.x] != 1)
                    pacman.move_up(this_player_id);
            }
            else if(e.keyCode == 40)
            {
                if(map[(pacman.position.y+1)*world.width+pacman.position.x] != 1)
                    pacman.move_down(this_player_id);
            }
            // else {
            //     console.log(e);
            // }

            //pacman.display(1);
        }

        if(this_player_id == 2){
            //player 2
            if(e.keyCode == 37)
            {
                if(map[pacman2.position.y*world.width+pacman2.position.x-1] != 1)
                    pacman2.move_left(this_player_id);
            }
            else if(e.keyCode == 39)
            {
                if(map[pacman2.position.y*world.width+pacman2.position.x+1] != 1)
                    pacman2.move_right(this_player_id);
            }
            else if(e.keyCode == 38)
            {
                if(map[(pacman2.position.y-1)*world.width+pacman2.position.x] != 1)
                    pacman2.move_up(this_player_id);
            }
            else if(e.keyCode == 40)
            {
                if(map[(pacman2.position.y+1)*world.width+pacman2.position.x] != 1)
                    pacman2.move_down(this_player_id);
            }

            //pacman2.display(2);
        }

        //see if there was a coin where the pacman1 currently is at
        if(this_player_id == 1)
        {
            if(map[pacman.position.y*world.width+pacman.position.x] == 2)
            {
                pacman.score += 10;
                //need real time
                $('#player1').find('.score').text(pacman.score);
                map[pacman.position.y*world.width+pacman.position.x] = 0;

                io.emit("update_score", {
                    player: 'player1',
                    score: pacman.score,
                    pacman_coord: pacman.position.y*world.width+pacman.position.x
                })
            }
        }

        //see if there was a coin where the pacman2 currently is at
        if(this_player_id == 2)
        {
            if(map[pacman2.position.y*world.width+pacman2.position.x] == 2)
            {
                pacman2.score += 10;
                //need real time
                $('#player2').find('.score').text(pacman2.score);
                map[pacman2.position.y*world.width+pacman2.position.x] = 0;

                io.emit("update_score", {
                    player: 'player2',
                    score: pacman2.score,
                    pacman_coord: pacman2.position.y*world.width+pacman2.position.x
                })
            }
        }
    });

    io.on("execute_update_score", function(data){

        $('#'+data.player).find('.score').text(data.score);
        map[data.pacman_coord] = 0;
    })

    populate_empty_with_coin();
    drawMap();

    pacman.display(1, 0, 0);
    pacman2.display(2, 0, 0);
}

GameLoop();

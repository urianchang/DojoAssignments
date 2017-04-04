//: Create game object
var game = {
  players: [],
  addPlayer: function(param1){
      game['players'].push(param1);
  }
};

//: Function to create player
function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};

//: Function to generate random number between 1 - 151
function genRandNum(min, max) {
    return Math.floor((Math.random()*max) + min);
}

//: Function to create pokemon card object based on id number
function pkmnCard(id) {
    var pkCard = {};
    pkCard.id = id;
    pkCard.image = 'http://pokeapi.co/media/img/' + id + '.png';
    pkCard.name;
    pkCard.attack;
    pkCard.getStats = function() {
        var url = "http://pokeapi.co/api/v1/pokemon/" + pkCard.id + "/";
        $.get(url, function(res) {
            pkCard.name = res.name;
            pkCard.attack = res.attack;
          }, "json");
    };
    return pkCard;
}

$(document).ready( function() {
    //: Generate two random pokemon
    var p1 = genRandNum(1, 151);
    var p2 = genRandNum(1, 151);

    //: Create the two players
    game.addPlayer(playerConstructor("red"));
    game.addPlayer(playerConstructor("blue"));

    //: Create image URL's for the pokemon
    var p1image = 'http://pokeapi.co/media/img/' + p1 + '.png';
    var p2image = 'http://pokeapi.co/media/img/' + p2 + '.png';

    //: Add images to respective divs
    $('#p1').append("<img src='"+ p1image + "'></img>");
    $('#p2').append("<img src='"+ p2image + "'></img>");

    //: Create pokemon cards
    var poke1 = pkmnCard(p1);
    var poke2 = pkmnCard(p2);
    poke1.getStats();
    poke2.getStats();

    //: Add pokemon cards to player hands
    game['players'][0]['hand'].push(poke1)
    game['players'][1]['hand'].push(poke2)

    //: For debugging, show player hands
    // console.log(game['players'][0]['hand']);
    // console.log(game['players'][1]['hand']);

    //: When user selects the outcome div
    $('.outcome').click(function () {
        //: Get attack stats for each player
        var p1atk = game['players'][0]['hand'][0].attack;
        var p2atk = game['players'][1]['hand'][0].attack;

        //: For debugging purposes, print player attacks
        console.log(p1atk, p2atk);

        //: Check for win conditions
        if (p1atk == p2atk) {
            $('.outcome').append("<h1>It's a draw</h1>");
        } else if (p1atk < p2atk) {
            $('.outcome').append("<h1>Player 2 wins</h1>");
        } else {
            $('.outcome').append("<h1>Player 1 wins</h1>");
        }
    });
});

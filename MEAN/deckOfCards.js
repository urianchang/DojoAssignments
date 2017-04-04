/*
Deck of Cards:

Create a Deck object constructor. A deck should have the following functionality:
    * The Deck should contain the 52 standard cards
    * The Deck should be able to shuffle
    * The Deck should be able to reset
    * The Deck should be able to deal a random card. Deal should return the card that was dealt and remove it from the deck.

Now create a Player object constructor. A Player should have the following functionality:
    * The Player should have a name
    * The Player should have a hand
    * The Player should be able to take a card (use the deck.deal method)
    * The Player should be able to discard a card

Optional:
    * Create a blackjack game with your deck of cards!
*/

function CardConstructor(suit, value) {
    this.suit = suit;
    this.value = value;
}

function DeckConstructor() {
    this.deck = [];
}
//: Prototype functions for deck
    // Make the deck
DeckConstructor.prototype.makeDeck = function() {
    var suits = ["diamonds", "spades", "clubs", "hearts"];
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (var suit = 0; suit < suits.length; suit++) {
        for (var i = 0; i < values.length; i++) {
            var card = new CardConstructor(suits[suit], values[i]);
            this.deck.push(card);
        }
    }
    console.log("Deck size is:", this.deck.length);
    return this;
}
    // Shuffle the deck
DeckConstructor.prototype.shuffle = function() {
    for (var idx = 0; idx < this.deck.length; idx++) {
        var rand = Math.floor(Math.random()*52);
        var temp = this.deck[idx];
        this.deck[idx] = this.deck[rand];
        this.deck[rand] = temp;
    }
    return this;
}
    // Deal a random card from the deck
DeckConstructor.prototype.deal = function() {
    var rand = Math.floor(Math.random()*52);
    var removedCard = this.deck.splice(rand, 1)[0];
    console.log(`Dealt player ${removedCard.value} of ${removedCard.suit}`);
    return removedCard;
}

function PlayerConstructor(name) {
    this.name = name;
    this.hand = [];
}
//: Prototype functions for player
    // Take a card
PlayerConstructor.prototype.takeCard = function(deckObj) {
    var myCard = deckObj.deal();
    console.log(`I got the ${myCard.value} of ${myCard.suit}`);
    this.hand.push(myCard);
    return this;
}
    // Discard top card
PlayerConstructor.prototype.discard = function () {
    var removedCard = this.hand.splice(0, 1)[0];
    console.log(`Removed ${removedCard.value} of ${removedCard.suit} from hand`);
    return this;
}

var deck = new DeckConstructor();
var player1 = new PlayerConstructor("player1");
deck.makeDeck().shuffle();
player1.takeCard(deck).takeCard(deck);
console.log(`${player1.name}'s current hand: ${player1.hand[0].value}`);
player1.discard();
console.log(`${player1.name}'s current hand: ${player1.hand[0].value}`);

import random

class Deck(object):
    def __init__(self, amount = 52):
        self.amount = amount
        deckList = []
        suitList = ["club", "diamond", "heart", "spade"]
        for suit in suitList:
            for num in range(1, 14):
                deckList.append(Card(num, suit))
        self.deck = deckList
    def shuffle(self):
        for ind, val in enumerate(self.deck):
            ind1 = random.randrange(0, 51)
            ind2 = random.randrange(0, 51)
            temp = self.deck[ind1]
            self.deck[ind1] = self.deck[ind2]
            self.deck[ind2] = temp
        print "Deck is being shuffled"

class Card(object):
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

class Person(object):
    def __init__(self, name, hand):
        self.name = name
        self.hand = hand
    def draw(self, deck, num):
        x = 0
        while x < num:
            self.hand.append(deck.deck.pop(0))
            x += 1
        print "Drawing card"

def printCardName(card):
    card_str = ""
    if card.value >= 1 or card.value <= 10:
        card_str += str(card.value) + " of"
    elif card.value == 11:
        card_str += "Jack of"
    elif card.value == 12:
        card_str += "Queen of"
    else:
        card_str += "King of"
    card_str += " " + str(card.suit)
    return card_str

print "Game start"
playing = True
deck1 = Deck()
deck1.shuffle()
user1 = Person("User", [])
print "Dealing you 2 cards"
user1.draw(deck1, 2)
print "These are your cards:"
print printCardName(user1.hand[0])
print printCardName(user1.hand[1])
sum = user1.hand[0].value + user1.hand[1].value
print "This is your sum: ", sum
ind = 1
while playing:
    if sum < 16:
        user1.draw(deck1, 1)
        ind += 1
        print "You just drew", printCardName(user1.hand[ind])
        sum += user1.hand[ind].value
        print "This is your current sum: ", sum
    elif sum >= 16 and sum < 21:
        print "You're staying."
        playing = False
    elif sum == 21:
        print "OMG. YOU HIT BLACKJACK!!!!"
        playing = False
    else:
        print "You went over."
        playing = False
print "Game Over"

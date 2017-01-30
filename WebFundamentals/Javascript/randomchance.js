// Random Chance
var winNum = 13;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pull(){
  var pull = getRandomInt(1, 100);
  var payOut;
  // console.log("Your number: " + pull);
  if (pull == winNum) {
    console.log("WIN!");
    return getRandomInt(50, 100);
  } else {
    console.log("LOSE");
    return 0;
  }
}

function slotmachine(coins, stopNum){
  var count = 1;
  var payOut;
  console.log("Starting coins: " + coins);
  while (coins > 0) {
    if (coins >= stopNum) {
      console.log("Let's cash out.");
      return coins;
    } else {
      console.log("Game " + count);
      payOut = pull();
      console.log("Coins won: " + payOut);
      coins = (coins + payOut) - 1;
      console.log("Coins left: " + coins);
      count++;
    }
  }
  return 0;
}

console.log("Payout: " + slotmachine(3, 100));
console.log("Game Over.");

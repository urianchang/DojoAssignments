// For a Few Billion

function kingsReward(days) {
  var reward = 0.01;
  for (var day = 2; day <= days; day++) {
    reward += Math.pow(2, day-1)/100;
  }
  return reward;
}

function daysToReward(amount) {
  var reward = 0.01;
  var sum = 0.01;
  var daycount = 1;
  
  while (sum < amount) {
    reward = 2*reward;
    sum += reward;
    daycount++;
  }
  return daycount;
}


console.log("Reward after 30 days: $", kingsReward(30));
console.log("Days to make $10,000:", daysToReward(10000));
console.log("Days to make $1,000,000,000:", daysToReward(1000000000));
console.log("Days to make INFINITY:", daysToReward(Infinity));

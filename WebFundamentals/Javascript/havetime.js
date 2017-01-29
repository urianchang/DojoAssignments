var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if (PERIOD == "AM") {
  PERIOD = "in the morning";
} else {
  PERIOD = "in the evening";
}

if (MINUTE%5 == 0) {
  if (MINUTE <= 10) {
    MINUTE = "It is " + MINUTE + " after";
  } else if (MINUTE == 15) {
    MINUTE = "It is quarter after ";
  } else if (MINUTE == 30) {
    MINUTE = "It is half past ";
  } else if (MINUTE == 45) {
    MINUTE = "It is quarter to ";
    HOUR++;
  } else if (MINUTE >= 50) {
    MINUTE = "It is " + (60-MINUTE) + " before";
    HOUR++;
  }
} else {
  if (MINUTE < 30) {
    MINUTE = "It's just after ";
  } else {
    MINUTE = "It's just before ";
    HOUR++;
  }
}

if (HOUR == 13) {
  HOUR = 1;
}

console.log(MINUTE, HOUR, PERIOD);

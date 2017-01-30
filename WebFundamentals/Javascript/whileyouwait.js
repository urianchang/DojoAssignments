// While You Wait
// Create a birthday countdown

var daysUntilMyBirthday = 60;

for (daysUntilMyBirthday; daysUntilMyBirthday >= 0; daysUntilMyBirthday--) {
  if (daysUntilMyBirthday > 30) {
    console.log(daysUntilMyBirthday, "days until my brithday. Such a long time... :(");
    continue;
  }
  if (daysUntilMyBirthday == 0) {
    console.log("HAPPY BIRTHDAY");
  } else if (daysUntilMyBirthday <= 5) {
    console.log(daysUntilMyBirthday, "DAYS UNTIL MY BIRTHDAY!")
  } else {
    console.log(daysUntilMyBirthday, "days until my birthday. Almost there!");
  }
}

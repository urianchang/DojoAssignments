// Range Print
function printRange(start, end, skip = 1){
  if (end === undefined){
    end = start;
    start = 0;
  }
  if (end > start) {
    for (var x = start; x < end; x += skip){
      console.log(x);
    }
  } else if (start > end) {
    for (var x = start; x > end; x -= skip){
      console.log(x);
    }
  } else {
    console.log("ERROR: Start and End values cannot be the same.");
  }
}

printRange(2, 10, 2);
console.log();
printRange(4, 8);
console.log();
printRange(4);
console.log();
printRange(-5, 0, 2);

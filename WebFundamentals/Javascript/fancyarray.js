// Fancy Array

function fancy(arr, symbol = "->", reversed = false) {
  if (reversed) {
    console.log("REVERSAL INITIATED...");
    var temp;
    for (var ind = 0; ind < (arr.length/2); ind++) {
      temp = arr[ind];
      arr[ind] = arr[arr.length-1-ind];
      arr[arr.length-1-ind] = temp;
    }
  }
  for (var ind = 0; ind < arr.length; ind++) {
    console.log(ind+' '+symbol+' '+arr[ind]);
  }
}

fancy(["James", "Jill", "Jane", "Jack"]);
console.log();
fancy(["Hello", "World", "My", "Dear"], "=>");
console.log();
fancy(["Hello", "World", "My", "Dear"], "-->", true);
console.log();
fancy(["James", "Jill", "Jane", "Jack"], undefined, true);

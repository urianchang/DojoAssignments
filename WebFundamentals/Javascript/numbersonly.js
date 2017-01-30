// Numbers Only
// Make a function that copies an array, ONLY accepting the items that are numbers.
// It should RETURN a new array.

var arr1 = [1, "apple", -3, "orange", 0.5];
var arr2 = [70, -90, "abc", 1, 'z', 3.14];

function numOnly(arr) {
  var newArr = [];
  for (var ind=0; ind < arr.length; ind++) {
    if (typeof arr[ind] === "number") {
      newArr.push(arr[ind]);
    }
  }
  return newArr;
}

function numOnlyV2(arr) {
  for (var ind=0; ind < arr.length; ind++) {
    if (typeof arr[ind] === "number"){
      continue;
    } else {
      arr.splice(ind, 1);
    }
  }
}

console.log("Starting array:", arr1);
console.log("This is with the function version 1.0 (e.g. new array):", numOnly(arr1));
console.log("Starting array #2:", arr2);
numOnlyV2(arr2);
console.log("This is with the function version 2.0 (e.g. same array):", arr2);

/*
JS Library:

Create your own JavaScript Library.
Add methods to a JS Object.
*/

//: Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]); // invoking the callback many times... delegation
    }
}

//: Let's build a few methods of underscore
var _ = {
   map: function(arr, callback) {
     var mapped = [];
     for (var idx in arr) {
         mapped.push(callback(arr[idx]));
     }
     return mapped;
   },
   reduce: function(arr, callback, memo) {
       var curSum = memo;
       for (var idx in arr) {
           curSum = callback(curSum, arr[idx]);
       }
       return curSum;
   },
   find: function(arr, callback) {
       for (var i = 0; i < arr.length; i++) {
           if (callback(arr[i])) {
               return arr[i];
           }
       }
   },
   filter: function(arr, callback) {
     var filtered = [];
     for (var i = 0; i < arr.length; i++) {
         var status = callback(arr[i]);
         if (status == true) {
             filtered.push(arr[i]);
         }
     }
     return filtered;
   },
   reject: function(arr, callback) {
       var filtered = [];
       for (var i = 0; i < arr.length; i++) {
           var status = callback(arr[i]);
           if (status == false) {
               filtered.push(arr[i]);
           }
       }
       return filtered;
    },
    each: function(arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            console.log(callback(arr[i]));
        }
    }
 }

// var evens = _.filter([1, 2, 3, 4, 5, 6], (num) => (num % 2 == 0));
//console.log(evens); // if things are working right, this will return [2,4,6].
// var showMe = _.each([1, 2, 3], (num) => (`Value in the array: ${num}`));
// var map = _.map([1, 2, 3], (num) => (num * 3));
// console.log(map);
// var reduce = _.reduce([1, 2, 3], (memo, num) => (num+memo), 15);
// console.log(reduce);
// var find = _.find([1, 2, 3, 4], (num) => (num % 2 == 0));
// console.log(find);

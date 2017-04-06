/*
JS Fundamentals I:

1. Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"].
2. Log each value.
3. Add a new value (100) in the array x using a push method.
4. Add a new array ["hello", "world", "JavaScript is Fun"] to variable x.
5. Log x in the console and analyze how x looks now.
6. Create a simple for loop that sums all the numbers between 1 to 500.
7. Have console log the final sum.
8. Write a loop that will go through the array [1, 5, 90, 25, -3, 0],
    find the minimum value, and then print it
9. Write a loop that will go through the array [1, 5, 90, 25, -3, 0],
    find the average of all of the values, and then print it
*/

//: 1 and 2
var x = [3, 5, "Dojo", "rocks", "Michael", "Sensei"];
for (var idx = 0; idx < x.length; idx++) {
    console.log(x[idx]);
}

//: 3
x.push(100);

//: 4
x.push(["hello", "world", "JavaScript is Fun"]);

//: 5
console.log(x);

//: 6
var sum = 0;
for (var num = 1; num <= 500; num++) {
    sum += num;
}

//: 7
console.log(sum);

//: 8 and 9
var arr1 = [1, 5, 90, 25, -3, 0];
var min = total = arr1[0];
for (var i = 1; i < arr1.length; i++) {
    if (arr1[i] < min) {
        min = arr1[i];
    }
    total += arr1[i];
}
console.log(`Minimum value in array: ${min}`);
console.log(`Average of array: ${total/arr1.length}`);

//: Iterate through the object and print every key

var newNinja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for (var key in newNinja) {
    console.log(`Key-value pair - ${key}: ${newNinja[key]}`);
}

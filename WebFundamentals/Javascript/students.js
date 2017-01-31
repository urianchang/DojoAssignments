// Students and instructors

// Part I: Given array of objects, print out first and last names.

var students = [
  {first_name: 'Michael', last_name: 'Jordan'},
  {first_name: 'John', last_name: 'Rosales'},
  {first_name: 'Mark', last_name: 'Guillen'},
  {first_name: 'KB', last_name: 'Tonel'}
]

console.log("Results for Part I:");
for (var ind = 0; ind < students.length; ind++) {
  console.log(students[ind].first_name, students[ind].last_name);
}
console.log();

// Part II: Given dictionary, print in this format: index - first last - characters
var users = {
  'Students': [
    {first_name: 'Michael', last_name: 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
  ],
  'Instructors': [
    {first_name : 'Michael', last_name : 'Choi'},
    {first_name : 'Martin', last_name : 'Puryear'}
  ]
}

//console.log(users.Students[0].first_name.length);
function printArray(arr){
  for (var ind = 0; ind < arr.length; ind++) {
    var pos = ind+1;
    var charCount = arr[ind].first_name.length + arr[ind].last_name.length;
    console.log(pos + ' - ' + arr[ind].first_name + ' ' + arr[ind].last_name + ' - ' + charCount);
  }
}

console.log("Results for Part II:");
console.log("Students");
printArray(users.Students);
console.log("Instructors");
printArray(users.Instructors);

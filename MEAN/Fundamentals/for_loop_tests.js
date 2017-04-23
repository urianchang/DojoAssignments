var person = {
    name: ["Billy", "Bill", "Will"],
    interests: ["coding", "eating", "sleeping"],
    dictionary: {1: "comment1", 2: "comment2"}
}

// for (var x in person) {
//     console.log(x);
//     for (var y of person[x]) {
//         console.log(y);
//     }
// }

//: For...in loops for objects | For...of loops for iterable stuff
for (var x in person['dictionary']) {
    console.log(x); //: Keys are printed
}
for (var x in person['interests']) {
    console.log(x); //: Indexes are printed
}
// for (var x of person['dictionary']) {
//     console.log(x); //: BROKEN
// }
for (var x of person['interests']) {
    console.log(x); //: Values are printed
}

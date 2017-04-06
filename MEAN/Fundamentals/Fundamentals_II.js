/*
JS Fundamentals II:

Part I:
Turn the following problems from JS Fundamentals Part I into functions that take variable inputs

1. Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
2. Write a loop that will go through an array, find the minimum value, and then return it
3. Write a loop that will go through an array, find the average of all of the values, and then return it

Rewrite these 3 as anonymous functions assigned to variables.
Rewrite these as methods of an object

Part II:
Create a JavaScript object called person with the following properties/methods

Properties
name - set this as your own name
distance_traveled - set this initially as zero

Methods
say_name - should alert the object’s name property
say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
*/

//: Part I
var anon1 = function addBetween(x, y) {
    var total = 0;
    for (var num = x; num <= y; num++) {
        total += num;
    }
    return total;
};

var anon2 = function minVal(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
};

var anon3 = function avg(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total/arr.length;
};

function exampleClass() {
    this.addBetween = function addBetween(x, y) {
        var total = 0;
        for (var num = x; num <= y; num++) {
            total += num;
        }
        console.log(total);
        return this;
    };
    this.minVal = function minVal(arr) {
        var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        console.log(min);
        return this;
    };
    this.avg = function avg(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        console.log(total/arr.length);
        return this;
    };
}
var test = new exampleClass();
test.addBetween(1, 3);

//: Part II
function person(nameStr) {
    this.name = nameStr;
    this.distance_traveled = 0;
    this.say_name = function() {
        console.log(this.name);
        return this;
    }
    this.say_something = function(param1) {
        console.log(`${this.name} says '${param1}'`);
        return this;
    }
    this.walk = function() {
        console.log(`${this.name} is walking`);
        this.distance_traveled += 3;
        return this;
    }
    this.run = function() {
        console.log(`${this.name} is running`);
        this.distance_traveled += 10;
        return this;
    }
    this.crawl = function() {
        console.log(`${this.name} is crawling`);
        this.distance_traveled += 1;
        return this;
    }
}

var test1 = new person("name1");
test1.say_name();
test1.say_something("I am cool");
test1.walk();
test1.run();
test1.crawl();
test1.say_something(`I traveled ${test1.distance_traveled} units`);

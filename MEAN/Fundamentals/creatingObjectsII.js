/*
Creating Objects II:

Create a VehicleConstructor that takes in the name, number of wheels,
and the number of passengers. Now add to it (WHA?!?!).
*/

function VehicleConstructor(name, wheels, passengers, speed) {

    //: PRIVATE stuff (teehee)
    var self = this;
    var distance_travelled = 0;
    var updateDistanceTravelled = function () {
        distance_travelled += self.speed;
    }

    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;

    //: Method - make noise
    this.makeNoise = function() {
        console.log("zoom zoom");
    }

    //: Method - move
    this.move = function() {
        updateDistanceTravelled();
        this.makeNoise();
        return this;
    }

    //: Method - check miles
    this.checkMiles = function() {
        console.log(`Miles travelled by ${this.name}: ${distance_travelled}`);
        return this;
    }
}

//: Create bike
var bike = new VehicleConstructor("bike", 2, 1, 10);
//: Redefine makeNoise for bike
bike.makeNoise = function() {
    console.log("ring ring!");
}
bike.move().checkMiles().move().move().checkMiles();

//: Create sedan
var sedan = new VehicleConstructor("sedan", 4, 4, 60);
sedan.makeNoise = function() {
    console.log("honk honk!");
}
// sedan.move().move().checkMiles();

//: Create a bus
var bus = new VehicleConstructor("bus", 4, 1, 40);
bus.pickUpPassengers = function() {
    this.passengers++;
    console.log(`The ${this.name} now has ${this.passengers} people on board`);
    return this;
}
// bus.pickUpPassengers().pickUpPassengers();

/*
Creating Objects III:

Create a VehicleConstructor that takes in the name, number of wheels,
and the number of passengers. Now add to it (WHA?!?!).
*/

function VehicleConstructor(name, wheels, passengers, speed) {

    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;
    this.distance_travelled = 0;
    this.VIN = null;

}

//: Prototype functions for VehicleConstructor
    // make noise
VehicleConstructor.prototype.makeNoise = function() {
    console.log("zoom zoom");
}
    // move
VehicleConstructor.prototype.move = function() {
    this.updateDistanceTravelled();
    this.makeNoise();
    return this;
}
    // check Miles
VehicleConstructor.prototype.checkMiles = function() {
    console.log(`Miles travelled by ${this.name}: ${this.distance_travelled}`);
    return this;
}
    // update distance travelled
VehicleConstructor.prototype.updateDistanceTravelled = function() {
    this.distance_travelled += this.speed;
    return this;
}
    // generate VIN for vehicle
VehicleConstructor.prototype.generateVIN = function() {
    var VINstr = "";
    for (var i = 0; i < 17; i++) {
        VINstr += Math.floor((Math.random()*10));
    }
    this.VIN = VINstr;
    console.log(VINstr);
    return this;
}

//: Create bike
var bike = new VehicleConstructor("bike", 2, 1, 10);
//: Redefine makeNoise for bike
bike.makeNoise = function() {
    console.log("ring ring!");
}
// bike.move().checkMiles().move().move().checkMiles();
bike.generateVIN();

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

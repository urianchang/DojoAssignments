/*
Creating Objects I:

Create a VehicleConstructor that takes in the name, number of wheels,
and the number of passengers.
*/

function VehicleConstructor(name, wheels, passengers) {
    var vehicle = {};
    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;

    //: Method - make noise
    vehicle.makeNoise = function() {
        console.log("i make noise");
    }

    return vehicle;
}

//: Create bike
var bike = VehicleConstructor("bike", 2, 1);
//: Redefine makeNoise for bike
bike.makeNoise = function() {
    console.log("ring ring!");
}
// bike.makeNoise();

//: Create sedan
var sedan = VehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function() {
    console.log("honk honk!");
}
// sedan.makeNoise();

//: Create a bus
var bus = VehicleConstructor("bus", 4, 1);
bus.pickUp = function() {
    bus.passengers++;
    console.log(`The bus now has ${bus.passengers} people on board`);
    return bus;
}
bus.pickUp().pickUp();

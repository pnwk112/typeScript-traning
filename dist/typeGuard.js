"use strict";
function testFunction(testVal) {
    if ('name' in testVal) { // type guard
        console.log(testVal.name);
    }
    if ('test' in testVal) { // type guard
        console.log(testVal.test);
    }
}
class Car {
    drive() {
        console.log('Driving a car');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(time) {
        console.log(`Loading cargo in ${time}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000); // type guard
    }
}
useVehicle(v1);
useVehicle(v2);

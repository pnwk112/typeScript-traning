type TestType = {
    name: string;
    age: number;
    isAlive: boolean;
}

type NewType = {
    age:number;
    test: object
}

type CombineType = TestType | NewType;

function testFunction(testVal: CombineType){
    if('name' in testVal){ // type guard
        console.log(testVal.name); 
    }
    if('test' in testVal){ // type guard
        console.log(testVal.test);
    }
}

class Car{
    drive(){
        console.log('Driving a car')
    }
}

class Truck{
    drive(){
        console.log('Driving a truck')
    }
    loadCargo(time: number){
        console.log(`Loading cargo in ${time}`)
    }
}

type Vehicle = Car | Truck

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000)     // type guard
    }
}
useVehicle(v1)
useVehicle(v2)
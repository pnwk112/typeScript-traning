"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'cat':
            speed = animal.runningSpeed;
            break;
        default:
            speed = 0;
            break;
    }
    console.log(`Moving at speed ${speed}`);
}

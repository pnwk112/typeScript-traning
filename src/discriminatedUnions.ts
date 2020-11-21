interface Cat{
    type: 'cat';
    runningSpeed: number;
}

interface Bird{
    type: 'bird';
    flyingSpeed: number;
}

type Animal = Bird | Cat;

 

function moveAnimal(animal: Animal){
    let speed: number;

    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'cat':
            speed = animal.runningSpeed
            break;
        default:
            speed = 0
            break;
    }
    console.log(`Moving at speed ${speed}`)
        
}
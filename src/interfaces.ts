interface Greetable{
    name: string;
    greet(text: string): void
}

class Person implements Greetable{
    name: string;
    var1: number;

    constructor(_name: string, var1: number){
        this.name = _name;
        this.var1 = var1;
    }

    greet(text: string): void {
        console.log(`Hello ${this.name}`)
    }
    
}
let cc: Greetable;
cc = new Person("Piotr",12) as Greetable
console.log(cc.name) // dostęp do pól i metod z Greetable
console.log(cc)


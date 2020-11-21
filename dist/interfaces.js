"use strict";
class Person {
    constructor(_name, var1) {
        this.name = _name;
        this.var1 = var1;
    }
    greet(text) {
        console.log(`Hello ${this.name}`);
    }
}
let cc;
cc = new Person("Piotr", 12);
console.log(cc.name); // dostęp do pól i metod z Greetable
console.log(cc);

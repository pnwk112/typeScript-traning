"use strict";
// function add(a: Combinable, b: Combinable): Combinable{
//     if(typeof a === 'string' || typeof b === 'string'){
//         return a.toString() + b.toString()
//     }else{
//         return a + b
//     }
// } 
// kompilator nie wie jaki będzie typ w runtme nie mozna więc napisać
// const result = add("Piotr", " Nowak"); result jest typu Combinable -> string LUB number
// result.split(" ") 
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
const result = add("Piotr", " Nowak");
result.split(" "); // result jest typu string

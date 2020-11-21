"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Piotr' }, { bankBalance: 50000 });
console.log(mergedObj.bankBalance);
// Constrains
function mergeWithConstrains(objA, objB) {
    return Object.assign(objA, objB);
}
// słowo kluczowe extends oznacza że Typ generyczny T musi mieć właściwość length. Oznacza to że string, array, itp spełniają ten warunek
function countAndPrint(element) {
    let messageText = 'Got no value';
    if (element.length > 0) {
        messageText = `Got ${element.length} elements`;
    }
    return [element, messageText];
}
console.log(countAndPrint('Hello World'));
// U extend keyof T oznacza ze U może być tylko nazwą key w obiekcie
function extractAndConvert(obj, key) {
    return obj[key];
}
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal;
}

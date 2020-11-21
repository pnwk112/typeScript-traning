function merge<T, U>(objA: T, objB: U){ // wartość zwracana typu T & U -> intersection of both types dzięki Object.assign
    return Object.assign(objA,objB)
}

const mergedObj = merge({name: 'Piotr'}, {bankBalance: 50000})
console.log(mergedObj.bankBalance)



// Constrains
function mergeWithConstrains<T extends object, U extends object>(objA: T , objB: U){ // wartość zwracana typu T & U -> intersection of both types dzięki Object.assign
    return Object.assign(objA,objB)
}

// const mergedObj2 = mergeWithConstrains({name: 'Piotr'}, 30) // parametr musi mieć za rodzica object

interface Lengthy{
    length: number
}
// słowo kluczowe extends oznacza że Typ generyczny T musi mieć właściwość length. Oznacza to że string, array, itp spełniają ten warunek
function countAndPrint<T extends Lengthy>(element: T): [T, string]{
    let messageText = 'Got no value'
    if(element.length > 0){
        messageText = `Got ${element.length} elements`
    }
    return [element, messageText]
}

console.log(countAndPrint('Hello World'))



// U extend keyof T oznacza ze U może być tylko nazwą key w obiekcie
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key]
}




interface CourseGoal{
    title: string;
    description: string;
    date: Date
}
function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    return courseGoal as CourseGoal
}
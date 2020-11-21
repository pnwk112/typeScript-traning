"use strict";
var Result;
(function (Result) {
    Result[Result["STRING"] = 0] = "STRING";
    Result[Result["NUMBER"] = 1] = "NUMBER";
})(Result || (Result = {})); // enum
// console.log(CombinableDesc)
function Combine(num1, num2, result) {
    let _result;
    if (result === Result.NUMBER) {
        _result = +num1 + +num2;
        console.log(isNaN(_result) ? new Error("Can't combine as number") : _result);
    }
    else if (result === Result.STRING) {
        _result = num1.toString() + num2.toString();
        console.log(_result);
    }
}
Combine("12", "12", Result.NUMBER);
Combine(12, "12", Result.NUMBER);
Combine("1A", "12", Result.NUMBER);
Combine(12, "12", Result.STRING);
Combine("1A", "12", Result.STRING);

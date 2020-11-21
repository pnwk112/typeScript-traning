enum Result {STRING,NUMBER} // enum
type CombinableDesc = 'as_num' | 'as_str' // type aliases
type Combinable = number | string // type aliases
// console.log(CombinableDesc)


function Combine(num1: string | number, num2: string | number, result: Result){
  let _result: string | number;
  if(result === Result.NUMBER){
    _result = +num1 + +num2;
    console.log(isNaN(_result) ? new Error("Can't combine as number") : _result)
  }else if(result === Result.STRING){
    _result = num1.toString() + num2.toString()
    console.log(_result)
  }
}

Combine("12","12",Result.NUMBER)
Combine(12,"12",Result.NUMBER)
Combine("1A","12",Result.NUMBER)
Combine(12,"12",Result.STRING)
Combine("1A","12",Result.STRING) 
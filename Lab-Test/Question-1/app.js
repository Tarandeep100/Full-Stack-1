const calculator = require("./calculator");


let num1 = 6;
let num2 = 6;
let num3 = 4;

let result1 = calculator.multiplyTwoNumbers(num1, num2);
let result2 = calculator.evenDoubler(num3);

console.log(`multiply ${num1} * ${num2} equals: ${result1}`);
console.log(`even double ${num3} equals: ${result2}`);

//Below function calls  throw errors.

calculator.multiplyTwoNumbers(true,false);
calculator.evenDoubler(true);
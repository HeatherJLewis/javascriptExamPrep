// Assignment:
// var: Declares a variable, optionally initializing it to a value.
var firstVariable;
// let: Declares a block-scoped, local variable, optionally initializing it to a value.
let secondVariable;
// const: Declares a block-scoped, read-only named constant.
const thirdVariable = "Hello";

console.log("arithmetic operators")
let number = 8
console.log(number%5); // 3
// console.log(++number)  // 8
// console.log(number)  // 8

console.log(7**3)

console.log("logical operators")
const statement = true;
statement && console.log("RHS") // RHS

const statement1 = false;
statement1 && console.log("RHS") // Nothing

const statement2 = true;
statement2 || console.log("RHS") // Nothing

const statement3 = false;
statement3 || console.log("RHS") // RHS

console.log("assignment operators")
let secondNumber = 9;
secondNumber += 5;
console.log(secondNumber)

let thirdNumber = 7;
thirdNumber %= 4;
console.log(thirdNumber)

let fourthNumber = 5;
fourthNumber **=2;
console.log(fourthNumber);

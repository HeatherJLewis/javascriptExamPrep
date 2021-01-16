// isNaN() tests whether something is NaN after coercing it
console.log("--------isNaN()-----------")

console.log(isNaN(123)) //false
console.log(isNaN(-1.23)) //false
console.log(isNaN(5-2)) //false
console.log(isNaN(0)) //false
console.log(isNaN('123')) //false
console.log(isNaN('Hello')) //true
console.log(isNaN('2005/12/12')) //true
console.log(isNaN('')) //false
console.log(isNaN(true)) //false
console.log(isNaN(undefined)) //true
console.log(isNaN('NaN')) //true
console.log(isNaN(NaN)) //true
console.log(isNaN(0 / 0)) //true
console.log(isNaN(null)) //false

// Number.isNaN() tests whether something is of type NaN - no coercion
console.log("--------Number.isNaN()-----------")

console.log(Number.isNaN(123)) //false
console.log(Number.isNaN(-1.23)) //false
console.log(Number.isNaN(5-2)) //false
console.log(Number.isNaN(0)) //false
console.log(Number.isNaN('123')) //false
console.log(Number.isNaN('Hello')) //false
console.log(Number.isNaN('2005/12/12')) //false
console.log(Number.isNaN('')) //false
console.log(Number.isNaN(true)) //false
console.log(Number.isNaN(undefined)) //false
console.log(Number.isNaN('NaN')) //false
console.log(Number.isNaN(NaN)) //true
console.log(Number.isNaN(0 / 0)) //true
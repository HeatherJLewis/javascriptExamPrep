// Built in Maths functions:

// Number Methods

// Static Methods

console.log("---Number Static Methods---");

let a = 42;
console.log(Number.isFinite(a));
console.log(Number.isNaN(a));
console.log(Number.isInteger(a));

// Instance Methods

console.log("---Number Instance Methods---");

let myNumber = 45.3623;
console.log(myNumber.toFixed());
console.log(myNumber.toFixed(2));
console.log(myNumber.toFixed(3));

console.log(myNumber.toPrecision()); // output -> no change to the number
console.log(myNumber.toPrecision(2));

console.log(myNumber.toString());
console.log(typeof myNumber.toString()); // output -> string

// Maths Methods

// Static

console.log("---Static Math Methods---");
let c = -9;
console.log(Math.abs(c));
console.log(Math.sqrt(9));
console.log(Math.cbrt(8));
console.log(Math.ceil(4.567));
console.log(Math.floor(4.567));
console.log(Math.round(4.567));
console.log(Math.pow(5, 2));
console.log(Math.random());

let d = Math.random();
console.log(Math.round(d*5));

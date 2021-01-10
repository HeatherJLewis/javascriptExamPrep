// Coercion/Type Conversion

/*
- explicit type conversion - you make the change
- implicit type conversion - JS makes the change for you
*/

// String Conversion:

let a = 42;
let b = a + ""; // implicit
console.log("b", b); // output -> "42"
console.log("typeof b", typeof b); // output -> "string"

let c = String(a); // explicit
console.log("c", c); // output -> "42"
console.log("typeof c", typeof c); // output -> "string"

// Numeric Conversion

let num1 = "9"
let num2 = +num1; // implicit
console.log("num2", num2); // output -> 9
console.log("typeof num2", typeof num2); // output -> "number"

let num3 = Number(num1); // explicit
console.log("num3", num3); // output -> 9
console.log("typeof num3", typeof num3); // output -> "number"

let num4 = "5";
console.log("num3+num4", num3+num4, typeof (num3+num4)); // add is not coerced but the other operators are automatically coerced
console.log("num3*num4", num3*num4, typeof (num3*num4));
console.log("num3-num4", num3-num4, typeof (num3-num4));
console.log("num3/num4", num3/num4, typeof (num3/num4));

// Numeric Conversion Rules:

console.log(Number("123z")); // output -> NaN
console.log(Number(undefined)); // output -> NaN
console.log(Number(null)); // output -> 0
console.log(Number(true)); // output -> 1
console.log(Number(false)); // output -> 0
console.log(Number("")); // output -> 0
console.log(Number("hello")); // output -> NaN

// An interesting example:
let e = 10;
let f = 20;
let g = e + f + "";
console.log("g = e + f + ''", g , typeof g); // output -> 30, string
g = e + f;
console.log("g = e + f", g , typeof g); // output -> 30, number
g = '' + e + f;
console.log("g = '' + e + f", g , typeof g); // output -> 1020, string
g = e + '' + f;
console.log("g = e + '' + f", g , typeof g); // output -> 1020, string

// Using parseInt and parseFloat:
let h = "123asd56";
let j = parseInt(h);
console.log(j, typeof j);

h = "12.3asd56";
j = parseInt(h);
console.log(j, typeof j);

h = "12.3asd56";
j = parseFloat(h);
console.log(j, typeof j);

// Boolean Conversion Rules

console.log(Boolean("0")); // explicit conversion
console.log(Boolean(" "));

console.log(!!"Hello"); // implicit coercion

// Falsey values: false, 0, NaN, undefined, null, ""
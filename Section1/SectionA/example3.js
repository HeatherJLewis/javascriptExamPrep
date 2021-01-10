// Increment and Decrement

/*
Increment ++
Decrement --
How they effect the variable depends on whether they are used to the left or the right of the variable:
*/

let num1 = 6;
console.log("num1" , num1); // output -> 6

// num++ adds 1 to the variable after the variable has been returned
// in the example below, the value of num is returned to the console.log and then num is incremented
console.log("num1++" , num1++); // output -> 6


let num2 = 6;
// ++num adds 1 to the variable before the variable has been returned
// in the example below, num is incremented and then the value of num is returned to the console.log
console.log("num2" , num2); // output -> 6
console.log("++num2" , ++num2); // output -> 7

// when you run these one after the other, it is easy to forget that the value of num changes:
let num = 6;
console.log("num" , num); // output -> 6
console.log("num++" , num++); // output -> 6
console.log("++num" , ++num); // output -> 8 (don't forget that num has been incremented on line 26)

// put together that could have an interesting result:
let a = 8;
let b = 3;
let c = b++ + a-- + --a;
console.log("combining increment/decrement", c) // output -> 17;

// another interesting point
let i = 1;
console.log("i" , i); // output -> 1
console.log("i++" , i++); // output -> 1
console.log("i" , i); // output -> 2
console.log("i+=1" , i+=1); // output -> 3
console.log("++i" , ++i); // output -> 4
console.log("i=i++" , i=i++); // output -> 4
console.log("i=i++" , i=i++); // output -> 4 (this does not increment so we wan't use it in a for loop,
// it returns the initial value of i and then increments so it will never change)
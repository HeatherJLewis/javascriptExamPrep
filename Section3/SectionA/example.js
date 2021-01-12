// Evaluate expressions that use logical and comparison operators.

// ==; !=; <, >; <=; >=; !; &&; ||

// Loose vs strict equality ( == vs === )

// loose equality checks for value after coercion - does not compare data types
// strict equality checks for value and data type - there is no coercion

// a really good resource here: https://github.com/course-one/js-mini-series/tree/master/equality
// try running them to see what happens
// Javascript Arrays and Objects are never equal irrespective of their contents

let a = { num : 3};
let b = a;
let c = { num : 3};

console.log(a==b);
console.log(a==c);
console.log(b==c);

console.log(a===b);
console.log(a===c);
console.log(b===c);

// Comparison operators


console.log("6 > 2", 6 > 2);
console.log("6 >= 2", 6 >= 2);
console.log("6 < 2", 6 < 2);
console.log("6 <= 2", 6 <= 2);
console.log("6 != 2", 6 != 2);

console.log("true && log LHS:")
true && console.log("LHS");
console.log("false && log LHS:")
false && console.log("LHS"); // no output

console.log("true || log LHS:")
true || console.log("LHS"); // no output
console.log("false || log LHS:")
false || console.log("LHS");
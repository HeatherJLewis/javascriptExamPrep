// String Operations

// Initialising a string:

let stringA = "Hello World"; // typeof - string; use this one
let stringB = new String("  Hello World  "); // typeof - object; don't use this one

console.log(typeof stringA, typeof stringB);

console.log(stringA.charAt(3));

console.log(stringA.concat(' Again!'));

console.log(stringA.includes("Wor"));

console.log(stringA.endsWith("!"));

console.log(stringA.startsWith("He"));

console.log(stringA.indexOf("o")); // output -> index of first instance
console.log(stringA.indexOf("or")); // output -> index of first instance
console.log(stringA.lastIndexOf("o")); // output -> index of last instance

console.log(stringA.padEnd(15, ".")); // output -> Hello World.... pads out the strings so that the total number of characters is 15
console.log(stringA.padStart(15, ".")); // output -> Hello World.... pads out the strings so that the total number of characters is 15

console.log(stringA.repeat(3));

console.log(stringA.replace('o', '*')); // replaces first instance of o

console.log(stringA.search("lo "));

console.log("slice 3", stringA.slice(3)); // does not mutate original string -> slice after the 4th character
console.log("HERE", stringA.slice(3, 8)); // slices after the 4th character and after the 8th character so it does not include the character at index 3 or at index 8

console.log(stringA.split()); // does not mutate original string
console.log(stringA.split(""));
console.log(stringA.split(" "));

console.log(stringA.substring(3));
console.log(stringA.substring(1, 3));

console.log(stringA.toLowerCase());
console.log(stringA.toUpperCase());

console.log(stringB);
console.log(stringB.trim()); // trims white space

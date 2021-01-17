// Complete and debug loops.

console.log("Example 1: for loop");

let str = "";
for(let i = 0; i < 10; i++){
    str +=i;
}

console.log(str);

console.log("Example 2: while loop"); // check first then execute

let result = 1;
let counter = 0;
while(counter < 10){
    result *=2;
    counter +=1;
}
console.log(result);
console.log(counter)

console.log("Example 3: do while loop"); // do at least once then check

let resultA = '';
let i = 0;

do {
  i = i + 1;
  resultA = resultA + i;
} while (i < 5);

console.log(resultA);
// expected result: "12345"

console.log("Example 3: CONTINUE"); // skips when the counter gets to 3
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// expected output: "012456789"

console.log("Example 4: BREAK"); // breaks out of the loop when the counter gets to 3
let n = 0;

while (n < 6) {
  if (n === 3) {
    break;
  }
  n = n + 1;
}

console.log(n);
// expected output: 3

// for ... of : loop of enumerable objects works for strings, arrays, array like items (Nodelist, arguments);
const array1 = [ 'a', 'b', 'c'];
for (const thing of array1){
    console.log(thing);
}

// for ... in : loops over objects
const object1 = { a: "hello", b: "goodbye"};
for (const key in object1){
    console.log(key);
    console.log(object1[key]);
};
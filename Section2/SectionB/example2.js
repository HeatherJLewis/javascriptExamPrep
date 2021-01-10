// Array methods

// includes: sorting and searching; push and pop; shift/unshift;

let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['e', 'f', 'g', 'h', 'i', 'j'];

console.log("concat", array1.concat(array2));

console.log("join", array1.join()); // joins the elements using a comma as the delimiter

console.log("push", array1.push('i'), array1);
console.log("pop", array1.pop(), array1);

console.log("shift", array1.shift(), array1);
console.log("unshift", array1.unshift('a'), array1);

console.log("slice", array2.slice(2)); // does not mutate original array, includes element with index 2 in the returned array
console.log("slice", array2.slice(2, 4)); // does not mutate original array, includes element with index 2 in the returned array but not element with index 4

console.log("slice", array2.slice(2)); // does not mutate original array, includes element with index 2 in the returned array

console.log("reverse", array2.reverse()); //

const numbers = [1, 4, 7,5, 3];
console.log(numbers.sort());
console.log(numbers.indexOf(7)); // output -> 4
console.log(numbers.indexOf(8)); // output -> -1

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const array3 = [1, 4, 9, 16];

// pass a function to map
const map1 = array3.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const isBelowThreshold = (currentValue) => currentValue < 40;

const array4 = [1, 30, 39, 29, 10, 13];

console.log(array4.every(isBelowThreshold));
// expected output: true

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

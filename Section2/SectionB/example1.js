// Arrays

// includes: single-dimensional: iteration; initialization; array definition; length; accessing an element; understanding multi-dimensional array


// single dimension-arrays and initialisation:

let a = [ 1, 2];
// or
let b = new Array(1, 2);

// iteration:
for(i=0; i < a.length; i++){
    a[i] +=1;
}
console.log(a);

a.forEach((item, index)=> {
    a[index] = item + 1;
});

console.log(a);

/*
Array definition:
- list like object
- use the index of an item to access it
- zero indexed
*/

// Array.length -> accesses its length property:
console.log(a.length);

// To access an element, use its index:
console.log(a[0]);

// A multidimensional array:
let c = [ [1, 2] , [3,4]]
console.log(c[0]);
console.log(c[0][1]);
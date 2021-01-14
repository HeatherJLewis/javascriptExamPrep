/* Order of decreasing precedence:
()
...++
...--
!... R -> L
+... R -> L
-... R -> L
++... R -> L
--... R -> L
...**... R -> L
...*... L -> R
.../... L -> R
...%... L -> R
...+... L -> R
...-... L -> R
...<... L -> R
...<=... L -> R
...>... L -> R
...>=... L -> R
...==... L -> R
...!=... L -> R
...===... L -> R
...!==... L -> R
...&&... L -> R
...||... L -> R
*/

// Examples:

console.log(2 != 0);
// console.log(2 =! 0); // throws an error -> unexpected token
console.log(2*2**3);
console.log((2*2)**3);

console.log((3+3)*10 >= 60);
console.log(3+3*10 >= 60);

let a = 0, b = 1, c = 42;
let d = a || b || c;
console.log(d);

let e = 5 * 0 || 3;
console.log(e);

let f = 5 * (0 ||3);
console.log(f);

let g = 10;
console.log(g > 5 ? "hello": "goodbye");
console.log(g * 5 > 5 ? "hello": "goodbye");
console.log(g * (2 > 5) ? "hello": "goodbye");

let h = 40;
let i = h = 5;
console.log(h, i);

let j = -1;
let k = (4 + 5 * 2)/ 2 - 7 || 3 + --j;
console.log(j, k);
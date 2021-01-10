// Assignment

/*
3 different types of assignment:
var, let and const:
            scope       reassignable    initialisation
var         function    yes             optional
let         block       yes             optional
const       block       no              mandatory
*/

// Examples - comment out all the examples, comment back in the examples you want to run

// Example 1:
function example1() {
    // block scoped
    {
      let alice = "a";
      var carol = "c";
    }

    console.log("example1 alice" , alice); // output -> alice not defined - error thrown
    console.log("example1 carol" , carol); // output -> c
};

example1();

// output -> alice is not defined (so throws an error) because alice is scoped to the curly braces between lines 17 and 20 - hidden from where it's called on line 22
// output (when alice is commented out) -> c because var is function scoped to the curly braces between lines 15 and 24 so it is visible from where it is called on line 23
// Try commenting out line 20 & line 22 to prove that the value of carol will be logged.

// Example 2

function example2() {
    let alice = 1;
    var carol = 3;
    {
        alice = "a";
        carol = "c";
    }
    console.log("example2 alice" , alice);
        // output -> a
    console.log("example2 carol" , carol);
        // output -> c
};

example2();

// with alice now block scoped between lines 33 and 44, it is now 'visible' to the console.log on  line 40. We can also reassign the value of alice from within the block
// scopes on line 36 to 37

// Example 3

function example3() {
    let alice = 1;
    var carol = 3;
    {
        alice = "a";
        const bob = 2;
        carol = "c";
    }
    console.log("example3 bob" , bob);
        // output -> bob is not defined (so throws an error) because bob is scoped to the curly braces between lines 32 and 34 - hidden from where it's called on line 36
};

example3();

// const behaves in the same way as let - because it is block scoped, the console.log cannot 'see' the const on line 54 and an error is thrown.

// Example 4

function example4() {
    let alice = 1;
    const bob = 2;
    var carol = 3;
    {
        alice = "a";
        carol = "c";
    }
    console.log("example4 alice" , alice);
        // output -> a
    console.log("example4 bob" , bob);
        // output -> 2
    console.log("example4 carol" , carol);
        // output -> c
};

example4();

// Complete and debug decision statements.

console.log("Example 1: if/else")

let x = 5;

if(x < 5){
    console.log(`${x} < 5`)
} else if(x > 5){
    console.log(`${x} > 5`)
} else {
    console.log(`${x} = 5`)
}

console.log("Example 2: Switch");

const switchFunction = (expression) => {
    switch (expression) {
        case 'oranges':
            console.log('oranges');
            break;
        case 'mangoes':
        case 'papayas':
            console.log('mangoes and papayas')
            break;
        case 'bananas':
            return console.log('bananas')
        default:
            console.log("no fruit for you!");
            // break; only needed if the default is not the last case in the switch block
    };
}

// break is optional and ensures that the code breaks out of the switch
console.log("Example a: oranges")
switchFunction("oranges");
console.log("Example b: mangoes")
switchFunction("mangoes");
console.log("Example c: papayas")
switchFunction("papayas");
console.log("Example d: lemons")
switchFunction("lemons");
console.log("Example e: bananas") // break not needed if the case is returned
switchFunction("bananas");

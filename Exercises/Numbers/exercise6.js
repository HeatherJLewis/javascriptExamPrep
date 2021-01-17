let numRabbits = 3;
let numMonths = 5;

function doubleRabbits(rabbitNum, monthNum){
    return rabbitNum * Math.pow(2, monthNum);
};

console.log(doubleRabbits(numRabbits, numMonths));
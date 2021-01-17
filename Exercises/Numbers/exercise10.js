let fuelNeeded = 0;

function findFuel(weight){
    fuelWeight = Math.floor(weight/2);
    fuelNeeded += fuelWeight;
    if(fuelWeight > 0){
        findFuel(fuelWeight);
    }
}

findFuel(20);
console.log(fuelNeeded);
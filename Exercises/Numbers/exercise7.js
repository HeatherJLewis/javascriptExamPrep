function splitBill(numPeople, totalCost){
    return Math.ceil(totalCost/numPeople)
};

console.log(splitBill(7, 58.99))
let myArray = [
    {
        number: 0,
        color: "red",
    },
    {
        number: 1,
        color: "green",
    },
    {
        number: 2,
        color: "red",
    },
    {
        number: 3,
        color: "red",
    },
    {
        number: 4,
        color: "green",
    },
    {
        number: 5,
        color: "green",
    }
];

function sortBalls(arr){
    let sortedArray = [];
    for(i=0; i<arr.length; i++){
        if(arr[i].color==="red"){
            sortedArray.unshift(arr[i]);
        } else {
            sortedArray.push(arr[i]);
        };
    }
    return sortedArray;
}

console.log(sortBalls(myArray));


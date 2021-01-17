let myArray = [
    {
        title: "Mrs",
        firstName: "Heather",
        lastName: "Lewis",
    },
    {
        title: "Mr",
        firstName: "Matthew",
        lastName: "Lewis",
    },
];

function addFullNameToObject(arr){
    for(i=0; i<arr.length; i++){
        const {title, firstName, lastName } = arr[i];
        arr[i].fullName = title + " " + firstName + " " + lastName;
    }
}

addFullNameToObject(myArray);

console.log(myArray);
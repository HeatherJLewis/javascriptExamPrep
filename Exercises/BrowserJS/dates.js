const myDate = new Date();
console.log(myDate);

const myDate2 = Date.now();
console.log(myDate2);

const myDate3 = Date.parse("12th September 2015");
console.log(myDate3);

console.log(myDate.getMonth());

console.log("new date", myDate.setDate(myDate.getDate() + 40));
console.log(myDate);

console.log(new Date(2020, 2, 15, 14, 47))
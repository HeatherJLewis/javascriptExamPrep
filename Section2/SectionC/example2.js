// Date Object

// includes: Date object: time; retrieving date parts; localization (MM/DD vs DD/MM); adding and subtracting dates

// Instantiation:

// Static Methods:
const myDate1 = new Date(); // creates a new date for now
const myDate2 = new Date(2021, 0, 11);
const myDate3 = Date.now(); // number of ms since Jan 1 1970 00:00:00
const myDate4 = Date.parse('04 Dec 1995 00:12:00 GMT'); // takes a string representation of a date and returns number of ms since Jan 1 1970 00:00:00

console.log(myDate1);
console.log(myDate2);
console.log(myDate3);
console.log(myDate4);

// Instance Methods:
console.log("getDate" , myDate1.getDate()) // Today's date - 11th
console.log("getDay" , myDate1.getDay()) // output -> 1 is Monday Sunday is 0
console.log("getFullYear" , myDate1.getFullYear());
console.log("getHours" , myDate1.getHours()) // output -> 8 - full hours since midnight
console.log("getMilliseconds" , myDate1.getMilliseconds())
console.log("getMinutes" , myDate1.getMinutes()) // output ->
console.log("getMinutes" , myDate1.getMinutes()) // output ->
console.log("getSeconds" , myDate1.getSeconds()) // output ->
console.log("getTime" , myDate1.getTime()) // output ->

console.log("toLocaleDateString" , myDate1.toLocaleDateString()) // output -> date in local syntax
console.log("toLocaleString" , myDate1.toLocaleString()) // output -> date and time in local syntax
console.log("toLocaleTimeString" , myDate1.toLocaleTimeString()) // output -> time in local syntax

// DD/MM to MM/DD
console.log("toLocaleDateString en-US" , myDate1.toLocaleDateString('en-US')) // output -> date in syntax for specified locale

// Add/Subtract Dates/Times

let myDate = new Date(2016, 1, 28);
console.log("myDate", myDate);
let date = myDate.getDate() + 2; // get the date and add 2 days to it.
console.log("date", date);
myDate.setDate(date); //
console.log("myDate", myDate);


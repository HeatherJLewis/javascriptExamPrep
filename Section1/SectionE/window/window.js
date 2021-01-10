// Window Object

/*
The window object:
- exposes the browser's functionality, such as:
*/

// window size properties:
// window.innerHeight;
// window.innerWidth;

// // opens a new window:
// window.open("url", windowName, [width, height, size, resizable]);

// // resizing a window:
// window.resizeTo(width, height);

// // closing a window:
// window.close();

// global functions:

// setTimeout Example:
setTimeout(callback, delayInMs, arg1, arg2); // where arg1 and arg2 are aguments passed into the timeout function

setTimeout((myName)=> {
    console.log(`Hello ${myName}`)
}, 3000, "Heather");

// If assigned to a variable, setTimeout returns an integer which can be used as an ID to cancel the timeout using clearTimeout(timeoutId)

// setTimeout ID Example: Run setTimeout.html to play with this functionality (from MDN docs)

// setInterval Example
setInterval(callback, delayInMs, arg1, arg2); // where arg1 and arg2 are aguments passed into the timeout function

setInterval((myName)=> {
    console.log(`Hello ${myName}`)
}, 1000, "Heather");

// If assigned to a variable, setInterval returns an integer which can be used as an ID to cancel the interval using clearInterval(intervalId)

// setInterval ID Example: Run setInterval.html to play with this functionality (from MDN docs)
// History Object

/*
- allows access to the browser's session history using the history object
*/

window.history.back();
// or
history.back();
// these work like the back button

window.history.forward();
// works like the forward button

window.history.go(n);

/*
if n = -1; -> go back one page
if n = 0; -> refresh the page
if n = 1; -> go forward one page

n can be an positive integer
*/


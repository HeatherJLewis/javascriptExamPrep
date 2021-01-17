// Location Object

/*
The location object provides read only access to information about the current location of the document.
*/

window.location.hostname;
// returns the name of the internet host e.g. www.bbc.co.uk

window.location.href;
// returns the href of the site - complete url

window.location.protocol;
// returns the protocol e.g. http, https,

window.location.pathname;
// returns the pathname of the current page e.g. /news

window.location.search;
// returns the query string used in the search to get to that page e.g. covid

// There are methods which you can use to manipulate the location object:

window.location.assign();
window.location.replace();
window.location.reload();
// Implement Exception Handling

/*
try; catch; finally
- The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.
- The optional finally block will execute after the try and/or catch block(s) have finished executing.
*/

// Example 1
try {
    statements();
}
catch (exception){
    console.log("catch", exception);
}
finally {
    console.log("finally");
}

// Example 2
try {
    throw "myException";
}
catch (exception){
    console.log("catch", exception);
}

// Example 3
try {
    // throw "myException";
    statements();
}
finally {
    console.log("finally");
}
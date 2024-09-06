// VOID & NEVER RETURNS 
// Void function
var greet = function (name) {
    console.log("Hello, ".concat(name, "!"));
};
var noReturnValue = function () {
    // This function doesn't return a value (implicitly returns undefined).
};
// Never return function
var throwError = function (message) {
    throw new Error(message);
};
var infiniteLoop = function () {
    while (true) {
        // This function never exits (infinite loop).
    }
};

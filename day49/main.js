// Day 49 Challenge: 
// *Question 145:* Create a function that accepts a callback and invokes it with some arguments.
function invokeCallback(callback) {
    var arg1 = 10;
    var arg2 = "Hello, World!";
    callback(arg1, arg2);
}
// Example usage:
function exampleCallback(arg1, arg2) {
    console.log("Callback invoked with arguments:", arg1, arg2);
}
invokeCallback(exampleCallback);

// Day 50 Challenge: 
// *Question 148:* Demonstrate the use of the setTimeout() function to execute code after a delay.
function delayedExecution(delay) {
    setTimeout(function () {
        console.log("Code executed after ".concat(delay, " milliseconds."));
    }, delay);
}
// Example usage:
var delayInMillis = 3000; // 3 seconds
delayedExecution(delayInMillis);

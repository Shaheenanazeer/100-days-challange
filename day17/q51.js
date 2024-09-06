// 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.ypescript
// Original function
function calculateArea(length, width) {
    return length * width;
}
// Refactored to arrow function
var calculateAreaArrow = function (length, width) { return length * width; };
// Test the function
console.log(calculateAreaArrow(5, 10));

// Day 43 Challenge: Start Coding!

// *Question 127:* Convert a traditional function expression to an arrow function.
// Traditional function expression
function traditionalFunc(x: number, y: number): number {
    return x + y;
}

// Converted to arrow function
const arrowFunc = (x: number, y: number): number => x + y;

// Arrow function ko call karte hain
console.log(arrowFunc(5, 3)); // Output: 8
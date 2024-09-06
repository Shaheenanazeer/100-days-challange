// Question 128:** Create an arrow function that takes multiple parameters and returns the product of all parameters.
// / Arrow function to calculate product of multiple parameters
var calculateProduct = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc * curr; }, 1);
};
// Example usage
console.log(calculateProduct(2, 3, 4)); // Output: 24

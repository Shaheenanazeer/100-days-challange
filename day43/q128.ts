// Question 128:** Create an arrow function that takes multiple parameters and returns the product of all parameters.

// / Arrow function to calculate product of multiple parameters
const calculateProduct = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc * curr, 1);
};

// Example usage
console.log(calculateProduct(2, 3, 4)); // Output: 24
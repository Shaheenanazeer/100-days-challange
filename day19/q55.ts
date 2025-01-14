// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// Original list of numbers
const originalNumbers: number[] = [1, 2, 3, 4, 5];

// New list where each number is twice its original value
const doubledNumbers: number[] = originalNumbers.map(num => num * 2);

// Output the new list
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
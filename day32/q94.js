//  Day 32 Challenge:
// Question 94: Use the `.map()` method to create a new array that contains the length of each word from an array of words.
// Defines an array with some words
var words = ["Hello", "World", "TypeScript", "JavaScript"];
// Uses .map() to create a new array with the length of each word
var lengths = words.map(function (word) { return word.length; });
console.log(lengths); // Outputs: [3, 8, 15, 20]
// Each number in the new array represents the length of the corresponding word in the original array.

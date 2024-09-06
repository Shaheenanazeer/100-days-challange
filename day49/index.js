// Question 146:** Show an example of a callback function used to filter an array of  numbers
function filterArray(numbers, callback) {
    return numbers.filter(callback);
}
// Example usage:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(num) {
    return num % 2 === 0;
}
var evenNumbers = filterArray(numbers, isEven);
console.log("Even numbers:", evenNumbers);

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.



// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}

// Example: Filtering an array of numbers
const numbers: number[] = [50, 14, 30, 20, 15];
console.log(filterGreaterThanTen(numbers)); 
// The new array contains only the numbers that are greater than 10.
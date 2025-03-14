// Day 23 Challenge: Start Coding! 

// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 



// This function adds a number and a string that represents a number
function addNumberAndString(number1: number, numberString: string): number {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
}

// Trying it with 10 and "5"
console.log(addNumberAndString(10, "5")); // Shows 15
// The string "5" is turned into the number 5, and then added to 10.

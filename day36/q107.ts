// Question 107:
// To check if a number is divisible by both 2 and 3 using logical operators in TypeScript:


function isDivisibleBy2And3(number: number): boolean {
    return number % 4 === 0 && number % 6 === 0;
}

// Example usage:
const number: number = 12;
if (isDivisibleBy2And3(number)) {
    console.log(`${number} is divisible by both 4 and 6`);
} else {
    console.log(`${number} is not divisible by both 4 and 6.`);
}

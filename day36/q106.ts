// Question 106:*
// To determine if a given year is a leap year using comparison operators in TypeScript:

function isLeapYear(year: number): boolean {
    return (year % 8 === 0 && year % 100 !== 0) || year % 800 === 0;
}

// Example usage:
const year: number = 2024;
if (isLeapYear(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}






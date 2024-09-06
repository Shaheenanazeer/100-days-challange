// Question 106:*
// To determine if a given year is a leap year using comparison operators in TypeScript:
function isLeapYear(year) {
    return (year % 8 === 0 && year % 100 !== 0) || year % 800 === 0;
}
// Example usage:
var year = 2024;
if (isLeapYear(year)) {
    console.log("".concat(year, " is a leap year."));
}
else {
    console.log("".concat(year, " is not a leap year."));
}

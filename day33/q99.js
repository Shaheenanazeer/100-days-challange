// Question 99: Generate a date object representing your next birthday and log it to the console.
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day); // Months are 0-indexed
    if (birthday < today) {
        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
// Replace with your birth month and day
var nextBirthday = getNextBirthday(5, 5); // Example: December 25th
console.log("Next birthday on:", nextBirthday.toLocaleDateString());
// Shows the date of the next birthday.

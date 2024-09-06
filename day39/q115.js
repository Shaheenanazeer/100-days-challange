// Day 39 Challenge: Start Coding
// *Question 115:* Use a switch statement to log the days of the week based on a number (1-7).
function logDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number. Please enter a number between 1 and 7.");
    }
    // console.log("day");
}
logDayOfWeek(3);
logDayOfWeek(8);

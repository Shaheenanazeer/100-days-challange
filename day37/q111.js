// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult)
function categorizeAge(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age < 20) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
var personAge = 25;
var ageGroup = categorizeAge(personAge);
console.log("Age Group:", ageGroup);

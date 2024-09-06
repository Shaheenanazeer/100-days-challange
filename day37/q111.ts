// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult)
function categorizeAge(age: number): string {
    if (age < 13) {
        return "Child";
    } else if (age < 20) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

const personAge: number = 25;
const ageGroup: string = categorizeAge(personAge);
console.log("Age Group:", ageGroup);



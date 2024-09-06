// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

// define a function that accepts multiple hobies as aeguments

function logHobbies(...hobbies: string[]) {
  hobbies.forEach((hobby) => {
    console.log(`I like ${hobby}.`);
  });
}
// Example usage
logHobbies(
  "reading the Quran pak",
  "playing with cats",
  "reading Fazail-e-Amal"
);
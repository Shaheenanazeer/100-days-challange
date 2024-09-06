// Day 47 Challenge: Start Coding! 
// Question 139: List three reserved words in JavaScript and create a valid use case for each.

// type:Use case: Define custom data tTypes.

type Person = {
    name: string;
    age: number;
};

const user: Person = {
    name: "John",
    age: 30
};

// interface:Use case: Declare the structure of objects.
interface Animal {
    name: string;
    type: string;
}

function printAnimal(animal: Animal) {
    console.log(`Name: ${animal.name}, Type: ${animal.type}`);
}

const dog: Animal = { name: "Spot", type: "Dog" };
printAnimal(dog);

// enum:Use case: Define a set of named constants.
enum Color {
    Red,
    Green,
    Blue
}

let backgroundColor: Color = Color.Blue;
console.log(backgroundColor); // Output: 2
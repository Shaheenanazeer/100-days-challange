// INTERFACE METHOD AND PARAMETERS 

// Define an interface 'Person' with a method 'greet'
interface PersonEx2 {
  name: string;
  age: number;
  greet(message: string): void;
}

// Create an object that adheres to the 'Person' interface
const Person: PersonEx2 = {
  name: "hina",
  age: 20,
  greet(message: string) {
    console.log(`${this.name} says: ${message}`);
  },
};

Person.greet("Hello, TypeScript!"); // Output:
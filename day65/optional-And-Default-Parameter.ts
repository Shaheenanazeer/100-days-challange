// OPTIONAL & DEFAULT PARAMETERS 

// Optional Parameters:
const greetOptional = function(name: string, age?: number) {
 if (age !== undefined) {
   console.log(`Hello, ${name}! You are ${age} years old.`);
 } else {
   console.log(`Hello, ${name}!`);
 }
}

greetOptional("sana"); // Output: "Hello, sana!"
greetOptional("hira", 35); // Output: "Hello, hira! You are 35 years old."

// Default Parameters:
const greetDefault = function(name: string, age: number = 30) {
 console.log(`Hello, ${name}! You are ${age} years old.`);
}

greetDefault("sana"); // Output: "Hello, sana! You are 30 years old."
greetDefault("hira", 35); // Output: "Hello, hira! You are 35 years old."

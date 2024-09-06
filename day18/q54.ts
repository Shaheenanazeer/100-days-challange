// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.// 

const Createobject: string = "skills";

// Create an object with flexible keys
const dynamiceObject: {[key: string]: string[]} = {
  [Createobject]: ["JavaScript", "HTML", "CSS"],
  // Other sections can be added similarly using computed property names
};

// Accessing the flexible object
console.log(dynamiceObject[Createobject]); // Output: ["JavaScript", "HTML", "CSS"]
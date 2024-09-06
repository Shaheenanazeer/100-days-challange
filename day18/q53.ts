// Queation 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

// / Define user's choices or requirements
const sectionName: string = "skills";

// Create an object with flexible keys
const flexibleObject: { [key: string]: string[] } = {
  [sectionName]: ["JavaScript", "HTML", "CSS"],
  // Other sections can be added similarly using computed property names
};

// Accessing the flexible object
console.log(flexibleObject[sectionName]); // Output: ["JavaScript", "HTML", "CSS"]
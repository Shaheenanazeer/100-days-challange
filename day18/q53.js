// Queation 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var _a;
// / Define user's choices or requirements
var sectionName = "skills";
// Create an object with flexible keys
var flexibleObject = (_a = {},
    _a[sectionName] = ["JavaScript", "HTML", "CSS"],
    _a);
// Accessing the flexible object
console.log(flexibleObject[sectionName]); // Output: ["JavaScript", "HTML", "CSS"]

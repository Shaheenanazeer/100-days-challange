// Question 3:** Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "shumaila";
// Lowercase
console.log("Lowercase: " + personName.toLowerCase());
// Uppercase
console.log("Uppercase: " + personName.toUpperCase());
// Titlecase
console.log("Titlecase: " + personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));

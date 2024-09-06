

// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return `true` if found, otherwise `false`.

//  This function checks if a sentence has "JavaScript" in it
function hasJavaScript(str: string): boolean {
    return str.includes("JavaScript"); // Checks for "JavaScript" and returns true or false
}

// Example: Seeing if a text mentions JavaScript
console.log(hasJavaScript("I love coding in JavaScript!")); 
console.log(hasJavaScript("python is my favorite language"));







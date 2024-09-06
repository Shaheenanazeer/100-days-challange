// *Question 135: Explain how you can format a JSON string with proper indentation for readability.*
// You can use the third argument of JSON.stringify() to specify the number of spaces for indentation:
var personName = {
    name: "iqra",
    age: 17,
    city: "karachi"
};
var jsonString1 = JSON.stringify(personName, null, 2);
console.log(jsonString1);

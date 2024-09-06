// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.// 
var _a;
var Createobject = "skills";
// Create an object with flexible keys
var dynamiceObject = (_a = {},
    _a[Createobject] = ["JavaScript", "HTML", "CSS"],
    _a);
// Accessing the flexible object
console.log(dynamiceObject[Createobject]); // Output: ["JavaScript", "HTML", "CSS"]

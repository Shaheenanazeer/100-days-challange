// Day 47 Challenge: Start Coding! 
// Question 139: List three reserved words in JavaScript and create a valid use case for each.
var user = {
    name: "John",
    age: 30
};
function printAnimal(animal) {
    console.log("Name: ".concat(animal.name, ", Type: ").concat(animal.type));
}
var dog = { name: "Spot", type: "Dog" };
printAnimal(dog);
// enum:Use case: Define a set of named constants.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue;
console.log(backgroundColor); // Output: 2

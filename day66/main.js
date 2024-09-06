// 1. Union Type:
var value;
value = 10;
console.log(value); // Output: 10
value = "Hello";
console.log(value); // Output: Hello
function displayCarType(carType) {
    console.log("Car type:", carType);
}
displayCarType("sedan"); // Output: Car type: sedan
displayCarType("SUV"); // Output: Car type: SUV
displayCarType("hatchback"); // Output: Car type: hatchback
// 3. Nullable Type:
var age;
age = 18;
console.log(age); // Output: 18
age = null;
console.log(age); // Output: null
var point = { x: 5, y: 15 };
console.log(point); // Output: { x: 5, y: 15}
function logAndPrint(obj) {
    obj.print();
    obj.log();
}
var obj = { print: function () { return console.log("Printing..."); }, log: function () { return console.log("Logging..."); } };
logAndPrint(obj);
// Output:
// Printing...
// Logging...

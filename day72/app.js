// A generic function that returns the input value as is
function returnType(val) {
    return val;
}
// Usage of the generic function with different types
var numValue = returnType(50);
var strValue = returnType("isha");
var boolValue = returnType(true);
var arrValue = returnType([5, 6, 7, 8]);
console.log("Number Value: ".concat(numValue));
console.log("String Value: ".concat(strValue));
console.log("Boolean Value: ".concat(boolValue));
console.log("Array Value: ".concat(arrValue));

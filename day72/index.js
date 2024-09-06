// Generic Function returnTypeEx
function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(150)); // Returns: 150 (number)
console.log(returnTypeEx("hira")); // Returns: "hira" (string)
// Arrow Function with Generics returnTypeArrowSyntax
var returnTypeArrowSyntax = function (val) { return val; };
console.log(returnTypeArrowSyntax(150)); // Returns: 150 (number)
console.log(returnTypeArrowSyntax("hira")); // Returns: "hira" (string)
// Generic Function testType
function testType(val) {
    return "The Value Is ".concat(val, " And Type Is ").concat(typeof val);
}
console.log(testType(150));
// Returns: "The Value Is 150 And Type Is number"
console.log(testType("hira"));
// Returns: "The Value Is hira And Type Is string"
// Generic Function multipleTypes
function multipleTypes(valueOne, valueTwo) {
    return "The First Value Is ".concat(valueOne, " And Second Value ").concat(valueTwo);
}
console.log(multipleTypes("Osama", 150));
// Returns: "The First Value Is Osama And Second Value 150"
console.log(multipleTypes("hira", true));
// Returns: "The First Value Is hira And Second Value true"

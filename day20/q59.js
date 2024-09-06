// / Question 59:* Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
var SpecialAdder = /** @class */ (function () {
    function SpecialAdder(specialNumber) {
        this.specialNumber = specialNumber;
    }
    SpecialAdder.prototype.add = function (numberToAdd) {
        return this.specialNumber + numberToAdd;
    };
    return SpecialAdder;
}());
// Example usage:
var specialAdder = new SpecialAdder(5); // Creating an adder with special number 5
var result = specialAdder.add(10); // Adding 10 to the special number
console.log(result); // Output will be 15

// / Question 59:* Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

class SpecialAdder {
    private specialNumber: number;

    constructor(specialNumber: number) {
        this.specialNumber = specialNumber;
    }

    add(numberToAdd: number): number {
        return this.specialNumber + numberToAdd;
    }
}

// Example usage:
const specialAdder = new SpecialAdder(5); // Creating an adder with special number 5
const result = specialAdder.add(10); // Adding 10 to the special number
console.log(result); // Output will be 15
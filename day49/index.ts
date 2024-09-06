// Question 146:** Show an example of a callback function used to filter an array of  numbers

function filterArray(numbers: number[], callback: (num: number) => boolean): number[] {
    return numbers.filter(callback);
}

// Example usage:
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(num: number): boolean {
    return num % 2 === 0;
}

const evenNumbers: number[] = filterArray(numbers, isEven);
console.log("Even numbers:", evenNumbers);

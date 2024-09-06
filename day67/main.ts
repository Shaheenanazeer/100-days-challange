// TYPE ANNOTATIONS WITH ARRAYS 

// Annotating an array of strings
let fruits: string[] = ["Mangho", "Orange", "Graps"];

// Using a loop to process each element in the array
for (let i = 0; i < fruits.length; i++) {
 console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}

// TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS 

let arrayOne: number[] = [6, 7, 8, 9, 10];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [6, 7, 8, 9, "A", "B", "C"];
console.log(arrayThree);

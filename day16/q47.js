// /Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    { make: "Apple", model: "MacBook pro", year: 2023 },
    { make: "Dell", model: "XPS 13", year: 2024 },
    { make: "HP", model: "Envy", year: 2022 }
];
var fristlaptop = laptops[0], secondlaptop = laptops[1];
console.log(fristlaptop, secondlaptop);

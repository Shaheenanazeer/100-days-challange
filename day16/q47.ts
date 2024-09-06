// /Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.


const laptops: { make: string; model: string; year: number }[] = [
  { make: "Apple", model: "MacBook pro",year: 2023 },
  {make: "Dell" , model: "XPS 13",year : 2024},
  {make: "HP" , model: "Envy" , year: 2022}
];


const[fristlaptop, secondlaptop] = laptops;



console.log(fristlaptop,secondlaptop);
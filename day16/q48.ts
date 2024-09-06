// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// Array representing prices of different sets od laptops

const laptopsSet1: number[] = [1500, 1200, 1800];
const laptopsSet2: number[] = [1600, 1300, 1700];

// combining arrays using spread operator and sorting in ascending order

const combinelaptops: number[] = [...laptopsSet1, ...laptopsSet2].sort(
  (a, b) => a - b
);

// Logging the combined and sorted array

console.log(combinelaptops);
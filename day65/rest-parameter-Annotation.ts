// REST PARAMETER & TYPE ANNOTATION 


// Function to sum all numbers
const addAll = function(...nums: number[]): number {
 let result = 0;
 for (let i = 0; i < nums.length; i++) {
   result += nums[i];
 }
 return result;
}

// Function call with various numeric arguments
console.log(addAll(10, 25, 30, 45, 55)); // Output: 165


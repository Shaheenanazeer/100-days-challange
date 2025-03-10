// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.



// This function simulates rolling a dice and returns a number between 1 and 6
function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1; // Calculates a random integer from 1 to 6
}

console.log(rollDice()); // Outputs a random number between 1 and 6
// Here, we mimic the action of rolling a dice and getting a result.

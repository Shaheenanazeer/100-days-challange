// Day 20 Challenge: 
//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// This program calculates the average of all scores given
function calculateAverage() {
    // Adds all scores together and divides by the number of scores
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
// Example: finding the average of four scores
console.log(calculateAverage(85, 90, 92, 88, 78)); // Shows the average score
// We add up all the scores, then divide by how many there are.

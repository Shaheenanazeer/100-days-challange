// *Question 110:*
// typescript
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
var score = 85;
var grade = assignGrade(score);
console.log("score:", score);
console.log("Grade:", grade);

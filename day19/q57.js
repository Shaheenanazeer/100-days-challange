// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.function calculateAverageGrade(grades: number[]): number 
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (total, grade) { return total + grade; }, 0);
    var average = sum / grades.length;
    return average;
}
var grades = [85, 90, 75, 88, 92];
var averageGrade = calculateAverageGrade(grades);
console.log("Average Grade:", averageGrade);

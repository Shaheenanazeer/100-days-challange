// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.function calculateAverageGrade(grades: number[]): number 

function calculateAverageGrade(grades: number[]): number {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    const average = sum / grades.length;
    return average;
}

const grades: number[] = [85, 90, 75, 88, 92];
const averageGrade: number = calculateAverageGrade(grades);
console.log("Average Grade:", averageGrade);
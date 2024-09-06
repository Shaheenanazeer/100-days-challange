

function logStudentMap(studentMap: Map<number, string>): void {
    studentMap.forEach((name, id) => {
        console.log("Student ID:", id, "Name:", name);
    });
}

// Example usage:
const studentMap = new Map<number, string>();
studentMap.set(1, "John");
studentMap.set(2, "Emma");
studentMap.set(3, "Michael");

logStudentMap(studentMap);
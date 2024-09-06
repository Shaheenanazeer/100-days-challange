function logStudentMap(studentMap) {
    studentMap.forEach(function (name, id) {
        console.log("Student ID:", id, "Name:", name);
    });
}
// Example usage:
var studentMap = new Map();
studentMap.set(1, "John");
studentMap.set(2, "Emma");
studentMap.set(3, "Michael");
logStudentMap(studentMap);

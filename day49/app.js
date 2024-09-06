// Question 147:* Explain how to handle errors in a callback pattern.
function performOperation(callback) {
    // Simulating an error condition
    var isError = true;
    if (isError) {
        callback(new Error("Error occurred!"), undefined);
    }
    else {
        callback(null, "Operation successful!");
    }
}
// Example usage:
performOperation(function (error, result) {
    if (error) {
        console.error("Error occurred:", error.message);
    }
    else {
        console.log("Operation result:", result);
    }
});

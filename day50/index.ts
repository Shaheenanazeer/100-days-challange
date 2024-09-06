// Question 149: Explain the concept of the event loop in JavaScript with an example.

// Define a function to simulate asynchronous operation
function simulateAsyncOperation(callback: () => void): void {
    setTimeout(() => {
        callback();
    }, 2000);
}

// Example usage:
console.log("Start");

// Simulate an asynchronous operation
simulateAsyncOperation(() => {
    console.log("Async operation completed");
});

console.log("End");
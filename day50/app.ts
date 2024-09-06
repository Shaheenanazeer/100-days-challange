// Question 150:** Describe how asynchronous callbacks differ from synchronous code execution.
// Synchronous function
function synchronousFunction(): void {
    console.log("Synchronous function execution");
}

// Asynchronous function with callback
function asynchronousFunction(callback: () => void): void {
    setTimeout(() => {
        console.log("Asynchronous function execution");
        callback();
    }, 2000);
}

// Example usage:
console.log("Start");

// Synchronous function call
synchronousFunction();

// Asynchronous function call with callback
asynchronousFunction(() => {
    console.log("Callback executed after asynchronous function");
});

console.log("End")
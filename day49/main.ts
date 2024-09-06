// Day 49 Challenge: 

// *Question 145:* Create a function that accepts a callback and invokes it with some arguments.

function invokeCallback(callback: (arg1: number, arg2: string) => void): void {
    const arg1: number = 10;
    const arg2: string = "Hello, World!";
    callback(arg1, arg2);
}

// Example usage:
function exampleCallback(arg1: number, arg2: string): void {
    console.log("Callback invoked with arguments:", arg1, arg2);
}

invokeCallback(exampleCallback);
// Question 147:* Explain how to handle errors in a callback pattern.


function performOperation(callback: (error: Error | null, result?: string) => void): void {
    // Simulating an error condition
    const isError: boolean = true;

    if (isError) {
        callback(new Error("Error occurred!"), undefined);
    } else {
        callback(null, "Operation successful!");
    }
}

// Example usage:
performOperation((error: Error | null, result?: string) => {
    if (error) {
        console.error("Error occurred:", error.message);
    } else {
        console.log("Operation result:", result);
    }
});

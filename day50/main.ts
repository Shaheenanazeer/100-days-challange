// Day 50 Challenge: 

// *Question 148:* Demonstrate the use of the setTimeout() function to execute code after a delay.

function delayedExecution(delay: number): void {
    setTimeout(() => {
        console.log(`Code executed after ${delay} milliseconds.`);
    }, delay);
}

// Example usage:
const delayInMillis: number = 3000; // 3 seconds
delayedExecution(delayInMillis);
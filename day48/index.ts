// .Question 143:** Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

const myPromise: Promise<string> = new Promise((resolve, reject) => {
    // For demonstration purposes, let's simulate rejection
    const shouldReject: boolean = false;

    if (shouldReject) {
        reject("Error: Something went wrong!");
    } else {
        setTimeout(() => {
            resolve("Promise resolved successfully!");
        }, 2000);
    }
});

myPromise
    .then((message) => {
        console.log("Resolved:", message);
    })
    .catch((error) => {
        console.error("Rejected:", error);
    })
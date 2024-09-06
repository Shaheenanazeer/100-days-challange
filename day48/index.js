// .Question 143:** Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var myPromise = new Promise(function (resolve, reject) {
    // For demonstration purposes, let's simulate rejection
    var shouldReject = false;
    if (shouldReject) {
        reject("Error: Something went wrong!");
    }
    else {
        setTimeout(function () {
            resolve("Promise resolved successfully!");
        }, 2000);
    }
});
myPromise
    .then(function (message) {
    console.log("Resolved:", message);
})
    .catch(function (error) {
    console.error("Rejected:", error);
});

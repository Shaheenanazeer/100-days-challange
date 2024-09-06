// Question 144:** Explain the use of the Promise.all() method with an example.
var promise1 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("First Promise Resolved");
    }, 2000);
});
var promise2 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(42);
    }, 3000);
});
var promise3 = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(true);
    }, 4000);
});
Promise.all([promise1, promise2, promise3])
    .then(function (values) {
    console.log("All promises resolved:", values);
})
    .catch(function (error) {
    console.error("Error occurred:", error);
});

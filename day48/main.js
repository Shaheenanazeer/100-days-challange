// Day 48 challenge question: Create a Promise in TypeScript resolving with 'Hello, World!' after 2 seconds.
var myPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
myPromise.then(function (message) {
    console.log(message);
});

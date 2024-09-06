// Day 48 challenge question: Create a Promise in TypeScript resolving with 'Hello, World!' after 2 seconds.

const myPromise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message);
});
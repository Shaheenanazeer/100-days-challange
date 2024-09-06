// Question 144:** Explain the use of the Promise.all() method with an example.

const promise1: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First Promise Resolved");
    }, 2000);
});

const promise2: Promise<number> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(42);
    }, 3000);
});

const promise3: Promise<boolean> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(true);
    }, 4000);
});
Promise.all([promise1, promise2, promise3])
.then((values) => {
    console.log("All promises resolved:", values);
    
})
.catch((error) => {
  console.error("Error occurred:", error)
})





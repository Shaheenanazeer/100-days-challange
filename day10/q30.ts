// Day 10 Challenge: 

// Question 30:Hello Admin: Greet users differently, especially 'admin'.


let usernames: string[] = ["admin", "sobia", "sara", "hira", "manal"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});

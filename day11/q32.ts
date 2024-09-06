
// Question 32: Checking Usernames: Ensure uniqueness in usernames.


let current_users: string[] = ["aliya", "sara", "ayesha", "shumaila", "sana"];
let new_users: string[] = ["iqra", "saima", "sobia", "admin", "salma"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

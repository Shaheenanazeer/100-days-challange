// Question 32: Checking Usernames: Ensure uniqueness in usernames.
var current_users = ["aliya", "sara", "ayesha", "shumaila", "sana"];
var new_users = ["iqra", "saima", "sobia", "admin", "salma"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});

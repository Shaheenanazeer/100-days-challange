// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.es ki coding typescript ma karo
var currentTime = new Date().getHours();
if (currentTime < 12) {
    console.log("Good Morning");
}
else {
    console.log("Good Afternoon");
}

// Day 6 Challenge: Start Coding!* 
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests: string[] = ["samra , sana , eman"];
console.log("Great news!I found a bigger dinner table!");

// Additing more guests
guests.unshift("Aliza");
guests.splice(guests.length / 2 , 0 , "sadaf");
guests.push("hina");

guests.forEach(guests=>{
    console.log(`Hello dear ${guests},would you like to join me for dinner?`);
    
});

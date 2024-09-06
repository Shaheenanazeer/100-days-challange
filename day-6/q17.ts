// Day 6 Challenge: 
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.


//  Define an array to hold guest names
let guests1: string[] = ["Arisha", "Beenish", "zahira", "urooj"];

// Shrink the guest list to accommodate only two guests
guests1 = guests1.slice(0, 2);

// Display the updated guest list
console.log("Updated Guest List:");
guests1.forEach((guest1, index) => {
    console.log(`${index + 1}. ${guest1}`);
});









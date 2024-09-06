// Day 6 Challenge: 
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
//  Define an array to hold guest names
var guests1 = ["Arisha", "Beenish", "zahira", "urooj"];
// Shrink the guest list to accommodate only two guests
guests1 = guests1.slice(0, 2);
// Display the updated guest list
console.log("Updated Guest List:");
guests1.forEach(function (guest1, index) {
    console.log("".concat(index + 1, ". ").concat(guest1));
});

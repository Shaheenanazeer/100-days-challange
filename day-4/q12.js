// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
var myName1 = ["sidra", "iqra", "faiza"];
for (var _i = 0, myName1_1 = myName1; _i < myName1_1.length; _i++) {
    var name_1 = myName1_1[_i];
    console.log("Hello ".concat(myName1, ", would you like to learn some TypeScript today?"));
}

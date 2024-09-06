// TUPLE//
// Define a tuple type
var value;
// Assigning a new tuple value to the myTuple variable
value = [18, "title three", true];
// Typing to push a new element into a tuple (will result in an error)
// myTuple.push(1000);
console.log(value);
// Destructuring the tuple into individual variables
var id = value[0], title = value[1], published = value[2];
console.log(id);
console.log(title);
console.log(published);

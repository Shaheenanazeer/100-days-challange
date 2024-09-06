// TUPLE//

// Define a tuple type

let value: [number, string, boolean]

// Assigning a new tuple value to the myTuple variable

value = [18, "title three", true];

// Typing to push a new element into a tuple (will result in an error)
// myTuple.push(1000);

console.log(value);

// Destructuring the tuple into individual variables

const [id,title, published] = value;
console.log(id)
console.log(title)
console.log(published);
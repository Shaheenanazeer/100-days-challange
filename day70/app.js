// INTERFACE METHOD AND PARAMETERS 
// Create an object that adheres to the 'Person' interface
var Person = {
    name: "hina",
    age: 20,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
Person.greet("Hello, TypeScript!"); // Output:

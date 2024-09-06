// Question 125:** Modify a method in an object to use the this keyword to access another property in the same object
var myObject = {
    name: "myObject",
    greeting: "Hello",
    greet: function () {
        return "".concat(this.greeting, ", my name is ").concat(this.name);
    },
    changeGreeting: function (newGreeting) {
        this.greeting = newGreeting;
    }
};
console.log(myObject.greet()); // Output: Hello, my name is myObject.

// Question 125:** Modify a method in an object to use the this keyword to access another property in the same object

const myObject = {
    name: "myObject",
    greeting: "Hello",
    greet: function() {
        return `${this.greeting}, my name is ${this.name}`;
    },
    changeGreeting: function(newGreeting: string) {
        this.greeting = newGreeting;
    }
};

console.log(myObject.greet()); // Output: Hello, my name is myObject.
    
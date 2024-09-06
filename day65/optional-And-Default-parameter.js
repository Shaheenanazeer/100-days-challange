// OPTIONAL & DEFAULT PARAMETERS 
// Optional Parameters:
var greetOptional = function (name, age) {
    if (age !== undefined) {
        console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
};
greetOptional("sana"); // Output: "Hello, sana!"
greetOptional("hira", 35); // Output: "Hello, hira! You are 35 years old."
// Default Parameters:
var greetDefault = function (name, age) {
    if (age === void 0) { age = 30; }
    console.log("Hello, ".concat(name, "! You are ").concat(age, " years old."));
};
greetDefault("sana"); // Output: "Hello, sana! You are 30 years old."
greetDefault("hira", 35); // Output: "Hello, hira! You are 35 years old."

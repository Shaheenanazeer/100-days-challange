
// Function Declaration
function greet() {
  alert("Hello!");
}

// Call the function
greet();

// Local Variables
function greetWithName(name) {
  const message = "Hello, " + name + "!";
  alert(message);
}

// Call the function with a parameter
greetWithName("Alice");

// Outer Variables
const greeting = "Welcome,";

function greetUser(name) {
  const message = greeting + " " + name + "!";
  alert(message);
}

// Call the function with a parameter
greetUser("hina");

// Parameters
function sum(a, b) {
  return a + b;
}

// Call the function with arguments and store the result
const result = sum(3, 4);

// Log the result
alert(result); // Output: 7

// Default Variables
function greetDefault(name = "Guest") {
  alert("Hello, " + name + "!");
}

// Call the function without providing a name
greetDefault(); // Output: Hello, Guest!

// Call the function with a name
greetDefault("John"); // Output: Hello, John!

// Naming a Function
const sayHello = function greetWithName(name) {
  const message = "Hello, " + name + "!";
  alert(message);
};

// Call the function using the assigned name
sayHello("Sarah");

// Function == Comments
// Function to greet the user
function greetUserComment(name) {
  // Displaying a greeting message
  alert("Hello, " + name + "!");
}

// Call the function with a parameter
greetUserComment("kainat");

// Function is a Value
const showMessage = function() {
  return "Hello everyone!";
};

// Call the function and store the returned value
const message = showMessage();

// Display the returned message
alert(message); // Output: Hello everyone!

// Callback Functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// Usage of callback functions
ask("Do you agree?", showOk, showCancel);

// Function Expression vs Function Declaration
// Function Declaration
function multiplyDeclaration(a, b) {
  return a * b;
}

// Function Expression
const multiplyExpression = function(a, b) {
  return a * b;
};

// Using both functions
alert(multiplyDeclaration(2, 3)); // Output: 6
alert(multiplyExpression(2, 3)); // Output: 6



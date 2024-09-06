
// Arrow Functions the Basics:
const greet = () => {
  alert("Hello!");
};

// Multiline Arrow Functions:
const greetWithName = (name) => {
  alert(`Hello, ${name}!`);
  alert("How are you?");
};

// Function Expression:
const greetExpression = function() {
  alert("Hello!");
};

// Functions as a Value:
const greetFunction = function() {
  alert("Hello!");
};

const sayBye = greetFunction; // Assigning the function to another variable

// Callback Function:
const processUserInput = (callback) => {
  let userInput = prompt("Enter your name:");
  callback(userInput);
};

const greetUser = (name) => {
  alert(`Hello, ${name}!`);
};

processUserInput(greetUser);

// Function Expression vs Function Declaration:
function greetDeclaration() {
  alert("Hello!");
}

// Function Expression:
const greetWithNameExpression = function(name) {
  alert(`Hello, ${name}!`);
};

// Calling the functions:
greet();
greetWithName("John");
greetExpression();
sayBye();
greetDeclaration();
greetWithNameExpression("Emily");






// Question 129:* Explain how this behaves differently in arrow functions compared to traditional functions.

// Traditional function
function traditionalFunction() {
    console.log(this); // 'this' refers to the caller of the function
}

// Arrow function
const arrowFunction = () => {
    console.log(this); // 'this' refers to the lexical scope where the arrow function is defined
};

// Example usage
const obj = {
    name: 'Object',
    traditional: traditionalFunction,
    arrow: arrowFunction
};

obj.traditional(); // Output: { name: 'Object', traditional: [Function: traditionalFunction], arrow: [Function: arrowFunction] }
obj.arrow(); // Output: {} (empty object)
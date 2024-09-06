// VOID & NEVER RETURNS 
 

// Void function
const greet = function(name: string): void {
  console.log(`Hello, ${name}!`);
}

const noReturnValue = function(): void {
  // This function doesn't return a value (implicitly returns undefined).
}

// Never return function
const throwError = function(message: string): never {
  throw new Error(message);
}

const infiniteLoop = function(): never {
  while (true) {
    // This function never exits (infinite loop).
  }
}

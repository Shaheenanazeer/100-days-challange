"use strict";
// Question 130:* Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
// In another files where you want to use the add function
var mathFunction_1 = require("./mathFunction");
console.log((0, mathFunction_1.add)(2, 3));

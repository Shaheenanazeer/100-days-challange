"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question 131:* Create two modules; one that exports a class, and another that imports the class and creates an instance.
// In another files:
var person_1 = require("./person");
var alice = new person_1.person("Alice");
alice.greet();

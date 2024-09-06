// Question 131:* Create two modules; one that exports a class, and another that imports the class and creates an instance.
// In another files:
import {person} from "./person";

const alice = new person("Alice");
alice.greet();
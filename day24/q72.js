// Question 72: Block Scope with `let` and `const`: Demonstrate block scope by creating a code block with `{}` that uses both `let` and `const`. Show how variables declared inside the block are not accessible outside of it
{
    var insideBlock = "I am inside the block";
    var alsoInsideBlock = "I am also inside the block";
    console.log(insideBlock);
    console.log(alsoInsideBlock);
}
// Attempting to access variables outside the block
try {
    console.log("insideBlock");
}
catch (error) {
    console.log("`insideBlock` is not accessible outside the block.");
}
try {
    console.log("alsoInsideBlock");
}
catch (error) {
    console.log("`alsoInsideBlock` is not accessible outside the block.");
}

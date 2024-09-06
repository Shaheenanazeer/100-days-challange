// Question 126:** Explain how the this keyword changes its value when used inside a nested function within a method.
var myObject = {
    name: "myObject",
    outerMethod: function () {
        console.log("Outer this:", this.name); // "myObject"
        var innerFunction = function () {
            console.log("Inner this:", this.name); // "undefined" or the global object
        };
        innerFunction();
    }
};
myObject.outerMethod();

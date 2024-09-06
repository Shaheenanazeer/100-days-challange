// DAY 24 CHALLANGE
// Question 124:** Create a function inside an object that returns the object's own name property using the this keyword.
var myObject = {
    name: "myObject",
    getName: function () {
        return this.name;
    }
};
console.log(myObject.getName()); // Output: myObject

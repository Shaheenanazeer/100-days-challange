// REST PARAMETER & TYPE ANNOTATION 
// Function to sum all numbers
var addAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
};
// Function call with various numeric arguments
console.log(addAll(10, 25, 30, 45, 55)); // Output: 175

// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array representing prices of different sets od laptops
var laptopsSet1 = [1500, 1200, 1800];
var laptopsSet2 = [1600, 1300, 1700];
// combining arrays using spread operator and sorting in ascending order
var combinelaptops = __spreadArray(__spreadArray([], laptopsSet1, true), laptopsSet2, true).sort(function (a, b) { return a - b; });
// Logging the combined and sorted array
console.log(combinelaptops);

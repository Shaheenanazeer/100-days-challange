// Day 15 Challenge
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// *Question 43:* Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var originalMagicians = ["Merlin", "Gandalf", "Harry Potter", "Dumbledore"];
var greatMagicians = __spreadArray([], originalMagicians, true);
console.log(greatMagicians);

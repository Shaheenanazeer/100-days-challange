// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
var findFirstVowel = function (str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            "return First vowel found: ".concat(char);
        }
    }
    return "No vowels found in the string.";
};
var inputString = "Hello World";
console.log(findFirstVowel(inputString));

// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

const findFirstVowel = (str: string): string => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if (vowels.includes(char)) {
            `return First vowel found: ${char}`;
        }
    }
    return "No vowels found in the string.";
}

const inputString = "Hello World";
console.log(findFirstVowel(inputString));
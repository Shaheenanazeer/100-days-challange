

// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("I love  javaScript is awesome!"));





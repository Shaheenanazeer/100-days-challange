// Day 38 Cchallenge
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function checkForCanadaCapital(capitalsMap: Map<string, string>): void {
    if (capitalsMap.has("Canada")) {
        console.log("The capital of Canada is: " + capitalsMap.get("Canada"));
    } else {
        console.log("Canada is not found in the map.");
    }
}

// Example usage:
const capitals = new Map<string, string>();
capitals.set("Canada", "Ottawa");
capitals.set("USA", "Washington D.C.");

checkForCanadaCapital(capitals);




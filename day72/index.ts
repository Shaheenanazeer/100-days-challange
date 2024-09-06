
// Generic Function returnTypeEx
function returnTypeEx<T>(val: T): T {
    return val;
}
  
console.log(returnTypeEx<number>(150)); // Returns: 150 (number)
console.log(returnTypeEx<string>("hira")); // Returns: "hira" (string)
  
// Arrow Function with Generics returnTypeArrowSyntax
const returnTypeArrowSyntax = <T>(val: T): T => val;
  
console.log(returnTypeArrowSyntax<number>(150)); // Returns: 150 (number)
console.log(returnTypeArrowSyntax<string>("hira")); // Returns: "hira" (string)
  
// Generic Function testType
function testType<T>(val: T): string {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
  
console.log(testType<number>(150));
// Returns: "The Value Is 150 And Type Is number"
  
console.log(testType<string>("hira"));
// Returns: "The Value Is hira And Type Is string"
  
// Generic Function multipleTypes
function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
  
console.log(multipleTypes<string, number>("Osama", 150));
// Returns: "The First Value Is Osama And Second Value 150"
  
console.log(multipleTypes<string, boolean>("hira", true));
// Returns: "The First Value Is hira And Second Value true"





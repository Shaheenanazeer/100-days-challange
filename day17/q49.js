// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
// define a function that accepts multiple hobies as aeguments
function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I like ".concat(hobby, "."));
    });
}
// Example usage
logHobbies("reading the Quran pak", "playing with cats", "reading Fazail-e-Amal");

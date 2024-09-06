// Question 42: Great Magicians: Add "the Great" to magicians.
var originalMagicians1 = ["Merlin", "Gandalf", "Harry Potter", "Dumbledore"];
var greatMagicians1 = originalMagicians1.map(function (magician) { return "Great ".concat(magician); });
console.log(greatMagicians1);

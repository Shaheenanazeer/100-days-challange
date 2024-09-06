// Question 46:* Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

//   laptop/  Object

const laptop = {
  make: "Apple",
  model: "MacBook pro ",
  year: 2023,
  describe: function () {
    console.log(`this laptop is a ${this.year} ${this.make} ${this.model}.`);
  },
};
laptop.describe();
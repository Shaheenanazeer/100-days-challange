// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
var Smartphone = /** @class */ (function () {
    function Smartphone(brand, model, storage, screen_size, battery_life) {
        this.brand = brand;
        this.model = model;
        this.storage = storage;
        this.screen_size = screen_size;
        this.battery_life = battery_life;
    }
    Smartphone.prototype.displayDetails = function () {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Storage:", this.storage);
        console.log("Screen Size:", this.screen_size);
        console.log("Battery Life:", this.battery_life);
    };
    return Smartphone;
}());
// Example usage:
var iphone = new Smartphone("Apple", "iPhone 12", "256GB", "6.1 inches", "Up to 17 hours");
iphone.displayDetails();

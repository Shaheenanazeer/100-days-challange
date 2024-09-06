// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
class Smartphone {
    constructor(public brand: string, public model: string, public storage: string, public screen_size: string, public battery_life: string) {}

    displayDetails(): void {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Storage:", this.storage);
        console.log("Screen Size:", this.screen_size);
        console.log("Battery Life:", this.battery_life);
    }
}

// Example usage:
const iphone = new Smartphone("Apple", "iPhone 12", "256GB", "6.1 inches", "Up to 17 hours");
iphone.displayDetails();
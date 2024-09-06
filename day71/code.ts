//  CLASS ACCESSORS 

class ProductWithAccessors {
  // 'private' property
  private _productPrice: number;

  constructor(private productId: number, private productName: string) {
    this._productPrice = 0; // Default price
  }

  // 'public' getter for price
  get price(): number {
    return this._productPrice;
  }

  // 'public' setter for price
  set price(newPrice: number) {
    if (newPrice >= 0) {
      this._productPrice = newPrice;
    } else {
      console.log("Price cannot be negative.");
    }
  }

  getProductInfo(): string {
    return `ID: ${this.productId}, Name: ${this.productName}, Price: $${this._productPrice}`;
  }
}

// Create an instance of the ProductWithAccessors class
const productWithAccessors = new ProductWithAccessors(1, "Gadget");

console.log(productWithAccessors.getProductInfo()); // Default price: ID: 1, Name: Gadget, Price: $0

// Use the 'setter' to update the price
productWithAccessors.price = 25.0;

console.log(productWithAccessors.getProductInfo()); // Updated price: ID: 1, Name: Gadget, Price: $25

// Attempting to set a negative price triggers the setter logic
productWithAccessors.price = -10; // Price cannot be negative.




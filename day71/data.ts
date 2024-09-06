// CLASS STATIC MEMBERS 

class Product {
  // 'private' property
  private static nextAvailableId: number = 1;

  constructor(private productId: number, private productName: string) {}

  static generateNextId(): number {
    return Product.nextAvailableId++;
  }

  getProductInfo(): string {
    return `ID: ${this.productId}, Name: ${this.productName}`;
  }
}

// Generate unique IDs for products using the static method
const product1 = new Product(
  Product.generateNextId(),
  "First Product"
);
const product2 = new Product(
  Product.generateNextId(),
  "Second Product"
);

console.log(product1.getProductInfo()); // ID: 1, Name: First Product
console.log(product2.getProductInfo()); // ID: 2, Name: Second Product

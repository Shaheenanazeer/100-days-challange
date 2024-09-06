// Class Implement Interface
class Products {
  private static nextId: number = 1;
  constructor(private productId: number, private productName: string) {}

  static generateNextId(): number {
    return Products.nextId++;
  }

  getProductDescription(): string {
    return `Product ID: ${this.productId}, Product Name: ${this.productName}`;
  }
}

// Generate unique IDs for products using the static method
const product3 = new Products(
  Products.generateNextId(),
  "Smartphone"
);
const product = new Products(
  Products.generateNextId(),
  "Laptop"
);

console.log(product3.getProductDescription()); // Output: Product ID: 1, Product Name: Smartphone
console.log(product.getProductDescription()); // Output: Product ID: 2, Product Name: Laptop






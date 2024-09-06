var Products = /** @class */ (function () {
    function Products(productId, productName) {
        this.productId = productId;
        this.productName = productName;
    }
    Products.generateNextId = function () {
        return Products.nextId++;
    };
    Products.prototype.getProductDescription = function () {
        return "Product ID: ".concat(this.productId, ", Product Name: ").concat(this.productName);
    };
    Products.nextId = 1;
    return Products;
}());
// Generate unique IDs for products using the static method
var product3 = new Products(Products.generateNextId(), "Smartphone");
var product = new Products(Products.generateNextId(), "Laptop");
console.log(product3.getProductDescription()); // Output: Product ID: 1, Product Name: Smartphone
console.log(product.getProductDescription()); // Output: Product ID: 2, Product Name: Laptop

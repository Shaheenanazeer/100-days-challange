// CLASS STATIC MEMBERS 
var Product = /** @class */ (function () {
    function Product(productId, productName) {
        this.productId = productId;
        this.productName = productName;
    }
    Product.generateNextId = function () {
        return Product.nextAvailableId++;
    };
    Product.prototype.getProductInfo = function () {
        return "ID: ".concat(this.productId, ", Name: ").concat(this.productName);
    };
    // 'private' property
    Product.nextAvailableId = 1;
    return Product;
}());
// Generate unique IDs for products using the static method
var product1 = new Product(Product.generateNextId(), "First Product");
var product2 = new Product(Product.generateNextId(), "Second Product");
console.log(product1.getProductInfo()); // ID: 1, Name: First Product
console.log(product2.getProductInfo()); // ID: 2, Name: Second Product

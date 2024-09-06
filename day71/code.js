//  CLASS ACCESSORS 
var ProductWithAccessors = /** @class */ (function () {
    function ProductWithAccessors(productId, productName) {
        this.productId = productId;
        this.productName = productName;
        this._productPrice = 0; // Default price
    }
    Object.defineProperty(ProductWithAccessors.prototype, "price", {
        // 'public' getter for price
        get: function () {
            return this._productPrice;
        },
        // 'public' setter for price
        set: function (newPrice) {
            if (newPrice >= 0) {
                this._productPrice = newPrice;
            }
            else {
                console.log("Price cannot be negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProductWithAccessors.prototype.getProductInfo = function () {
        return "ID: ".concat(this.productId, ", Name: ").concat(this.productName, ", Price: $").concat(this._productPrice);
    };
    return ProductWithAccessors;
}());
// Create an instance of the ProductWithAccessors class
var productWithAccessors = new ProductWithAccessors(1, "Gadget");
console.log(productWithAccessors.getProductInfo()); // Default price: ID: 1, Name: Gadget, Price: $0
// Use the 'setter' to update the price
productWithAccessors.price = 25.0;
console.log(productWithAccessors.getProductInfo()); // Updated price: ID: 1, Name: Gadget, Price: $25
// Attempting to set a negative price triggers the setter logic
productWithAccessors.price = -10; // Price cannot be negative.

// / Interface definitions for Book and Game
// Generic Class Collection
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    // Method to add an item of type T to the collection
    Collection.prototype.add = function (item) {
        this.data.push(item);
    };
    return Collection;
}());
// Creating an instance of Collection with type parameter Book
var itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "The Holy Quran", isbn: 139789675062006 });
itemOne.add({ itemType: "Book", title: "Sahih Muslim", isbn: 139789694281686 });
console.log(itemOne);
// Creating an instance of Collection with type parameter Game
var itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);

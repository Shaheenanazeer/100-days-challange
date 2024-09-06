//  POLYMORPHISM & METHOD OVERRIDE 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Define an abstract class
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity(entityId, entityName) {
        this.entityId = entityId;
        this.entityName = entityName;
    } // Change 'private' to 'protected'
    AbstractEntity.generateNextId = function () {
        return AbstractEntity.nextId++;
    };
    AbstractEntity.nextId = 1;
    return AbstractEntity;
}());
// Create a concrete subclass
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity(entityId, entityName) {
        return _super.call(this, entityId, entityName) || this;
    }
    Entity.prototype.getEntityInfo = function () {
        return "Entity ID: ".concat(this.entityId, ", Entity Name: ").concat(this.entityName);
    };
    return Entity;
}(AbstractEntity));
// Create another concrete subclass
var AnotherEntity = /** @class */ (function (_super) {
    __extends(AnotherEntity, _super);
    function AnotherEntity(entityId, entityName) {
        return _super.call(this, entityId, entityName) || this;
    }
    AnotherEntity.prototype.getEntityInfo = function () {
        return "Entity ID: ".concat(this.entityId, ", Entity Name: ").concat(this.entityName, ", Additional Info: ...");
    };
    return AnotherEntity;
}(AbstractEntity));
// Generate unique IDs for entities using the static method
var entity1 = new Entity(AbstractEntity.generateNextId(), "Widget");
var entity2 = new AnotherEntity(AbstractEntity.generateNextId(), "Gadget");
// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // Output: Entity ID: 1, Entity Name: Widget
console.log(entity2.getEntityInfo()); // Output: Entity ID: 2, Entity Name: Gadget, Additional Info: ...

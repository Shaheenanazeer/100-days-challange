
//  POLYMORPHISM & METHOD OVERRIDE 
 

// Define an abstract class
abstract class AbstractEntity {
  private static nextId: number = 1;
  protected constructor(public entityId: number, protected entityName: string) {} // Change 'private' to 'protected'
  static generateNextId(): number {
    return AbstractEntity.nextId++;
  }
  abstract getEntityInfo(): string;
}

// Create a concrete subclass
class Entity extends AbstractEntity {
  constructor(entityId: number, entityName: string) {
    super(entityId, entityName);
  }
  getEntityInfo(): string {
    return `Entity ID: ${this.entityId}, Entity Name: ${this.entityName}`;
  }
}

// Create another concrete subclass
class AnotherEntity extends AbstractEntity {
  constructor(entityId: number, entityName: string) {
    super(entityId, entityName);
  }
  getEntityInfo(): string {
    return `Entity ID: ${this.entityId}, Entity Name: ${this.entityName}, Additional Info: ...`;
  }
}

// Generate unique IDs for entities using the static method
const entity1: AbstractEntity = new Entity(
  AbstractEntity.generateNextId(),
  "Widget"
);
const entity2: AbstractEntity = new AnotherEntity(
  AbstractEntity.generateNextId(),
  "Gadget"
);

// Polymorphism: Call 'getEntityInfo' method on different concrete subclasses
console.log(entity1.getEntityInfo()); // Output: Entity ID: 1, Entity Name: Widget
console.log(entity2.getEntityInfo()); // Output: Entity ID: 2, Entity Name: Gadget, Additional Info: ...




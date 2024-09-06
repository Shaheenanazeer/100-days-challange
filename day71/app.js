//  CLASS ACCESS MODIFIERS: 
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
var MyClassPublic = /** @class */ (function () {
    function MyClassPublic(name) {
        this.fullName = name;
    }
    return MyClassPublic;
}());
var instancePublic = new MyClassPublic("haniya");
console.log(instancePublic.fullName); // Accessing the public property
var MyClassPrivate = /** @class */ (function () {
    function MyClassPrivate(secret) {
        this.secretPhrase = secret;
    }
    MyClassPrivate.prototype.revealSecret = function () {
        console.log(this.secretPhrase); // Accessing the private property from within the class
    };
    return MyClassPrivate;
}());
var instancePrivate = new MyClassPrivate("My private message");
// console.log(instance.secretPhrase); // This would result in an error because secretPhrase is private
instancePrivate.revealSecret(); // This is a valid way to access the private property
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.surname = name;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.introduceFamily = function () {
        console.log("Our family name is ".concat(this.surname));
    };
    return Child;
}(Parent));
var parentEx = new Parent("kainat");
var childEx = new Child("alishba");
// console.log(parentEx.surname); // This would result in an error because surname is protected
childEx.introduceFamily(); // This is a valid way to access the protected property.

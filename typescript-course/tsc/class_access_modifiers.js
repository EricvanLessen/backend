/**
 *
 * By using these access modifiers, you can control the visibility and accessibility of
 * class members to enforce encapsulation and data hiding in your TypeScript code.
 *
 * `private`: When a member is marked as `private`, it can only be accessed within the same class.
 * It is not accessible from outside the class or its subclasses.
 *
 */
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
var Example0 = /** @class */ (function () {
    function Example0() {
    }
    Example0.prototype.privateMethod = function () {
        // Code here can only be accessed within this class
    };
    return Example0;
}());
var instance0 = new Example0();
// instance0.privateProperty; // Error: privateProperty is private and cannot be accessed
// instance0.privateMethod(); // Error: privateMethod is private and cannot be accessed
/**
 *
 * `protected`: A `protected` member can be accessed within the same class and its subclasses.
 * It is not accessible from outside the class hierarchy.
 *
 */
var Example1 = /** @class */ (function () {
    function Example1() {
    }
    Example1.prototype.protectedMethod = function () {
        // Code here can be accessed within this class and its subclasses
    };
    return Example1;
}());
var SubExample1 = /** @class */ (function (_super) {
    __extends(SubExample1, _super);
    function SubExample1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubExample1.prototype.someMethod = function () {
        this.protectedProperty; // Accessible within subclasses
        this.protectedMethod(); // Accessible within subclasses
    };
    return SubExample1;
}(Example1));
var instance1 = new Example1();
// instance1.protectedProperty; // Error: protectedProperty is protected and cannot be accessed
// instance1.protectedMethod(); // Error: protectedMethod is protected and cannot be accessed
/**
 * `public`: The `public` modifier is the default and allows access to a member from anywhere.
 * It is not required to explicitly specify `public`.
 */
var Example2 = /** @class */ (function () {
    function Example2() {
    }
    Example2.prototype.publicMethod = function () {
        // Code here can be accessed from anywhere
    };
    return Example2;
}());
var instance2 = new Example2();
instance2.publicProperty; // Accessible
instance2.publicMethod(); // Accessible

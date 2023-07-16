/**
 *
 * The People class is defined as an abstract class with a displayDate method that logs "some data".
 * The Kids class extends the People class. The abstract class is used to model what other classes should have.
 * An instance of the Kids class is created with let KidsClass = new Kids, and the displayDate method
 * is called on the KidsClass instance, resulting in the log of "some data".
 * Please note that abstract classes cannot be instantiated directly, but can be extended by other classes.
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
/**
 * Represents an abstract class for people.
 */
var People = /** @class */ (function () {
    function People() {
    }
    /**
     * Displays some data.
     */
    People.prototype.displayDate = function () {
        console.log("A person");
    };
    return People;
}());
/**
 * Represents a class for kids that extends the People class.
 */
var Kids = /** @class */ (function (_super) {
    __extends(Kids, _super);
    function Kids() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kids;
}(People));
// Create an instance of the Kids class
var KidsClass = new Kids;
// Call the displayDate method on the KidsClass instance
KidsClass.displayDate();

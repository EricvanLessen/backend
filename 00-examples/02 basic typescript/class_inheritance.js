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
 * Represents a building with a window and escalators.
 */
var Building = /** @class */ (function () {
    function Building() {
        this.window = "window 1";
    }
    /**
     * Moves the escalators.
     */
    Building.prototype.escalators = function () {
        console.log('The escalators are moving.');
    };
    return Building;
}());
var building = new Building;
building.escalators();
/**
 * Represents a building that extends the Building class.
 */
var Building2 = /** @class */ (function (_super) {
    __extends(Building2, _super);
    function Building2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Overrides the escalators method to log the window property.
     */
    Building2.prototype.escalators = function () {
        console.log(this.window);
    };
    return Building2;
}(Building));
var building2 = new Building2;
building2.escalators();

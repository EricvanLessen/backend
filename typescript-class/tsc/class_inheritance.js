var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Building = (function () {
    function Building() {
        this.window = "window 1";
    }
    Building.prototype.escalators = function () {
        console.log('The escalators is moving');
    };
    return Building;
}());
//
// const building = new Building;
//
// building.escalators();
var Building2 = (function (_super) {
    __extends(Building2, _super);
    function Building2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Building2.prototype.escalators = function () {
        console.log(this.window);
    };
    return Building2;
}(Building));
var building2 = new Building2;
building2.escalators();
//# sourceMappingURL=class_inheritance.js.map
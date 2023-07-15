/*
The code demonstrates the usage of decorator pattern in TypeScript.
It defines an abstract Car class and two concrete car classes ModelS and ModelX.
It also defines abstract CarOptions class that extends Car and concrete car options classes EnhancedAutoPilot and RearFacingSeats.
The CarOptions classes are used to decorate the car objects and add additional features and cost to them.
The code instantiates a ModelS car, decorates it with RearFacingSeats option, and then decorates it further with EnhancedAutoPilot option.
Finally, it outputs the cost and description of the decorated car.
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
/*
 * The decorator pattern is used to dynamically add additional behaviors or features to an object without
 * modifying its structure. It allows you to extend the functionality of an object at runtime by wrapping
 * it with one or more decorators. This pattern is useful when you want to add new behaviors to an object
 * without affecting other objects of the same class.
*/
/**
 * Represents an abstract class for a Car.
 */
var Car = /** @class */ (function () {
    function Car() {
    }
    /**
     * Returns the description of the car.
     */
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
/**
 * Represents a Model S car, extending the Car class.
 */
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
    }
    /**
     * Returns the cost of the Model S car.
     */
    ModelS.prototype.cost = function () {
        return 73000;
    };
    return ModelS;
}(Car));
/**
 * Represents a Model X car, extending the Car class.
 */
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
    }
    /**
     * Returns the cost of the Model X car.
     */
    ModelX.prototype.cost = function () {
        return 77000;
    };
    return ModelX;
}(Car));
/**
 * Represents an abstract class for Car options, extending the Car class.
 */
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
/**
 * Represents the Enhanced AutoPilot option for a car, extending the CarOptions class.
 */
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    /**
     * Returns the description of the car with Enhanced AutoPilot option.
     */
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
    };
    /**
     * Returns the cost of the car with Enhanced AutoPilot option.
     */
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return EnhancedAutoPilot;
}(CarOptions));
/**
 * Represents the Rear Facing Seats option for a car, extending the CarOptions class.
 */
var RearFacingSeats = /** @class */ (function (_super) {
    __extends(RearFacingSeats, _super);
    function RearFacingSeats(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    /**
     * Returns the description of the car with Rear Facing Seats option.
     */
    RearFacingSeats.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', Rear facing seats';
    };
    /**
     * Returns the cost of the car with Rear Facing Seats option.
     */
    RearFacingSeats.prototype.cost = function () {
        return this.decoratedCar.cost() + 4000;
    };
    return RearFacingSeats;
}(CarOptions));
// Instantiate a ModelS car
var myTesla = new ModelS();
// Decorate the car with Rear Facing Seats option
myTesla = new RearFacingSeats(myTesla);
console.log(myTesla.cost()); // Output: 77000
console.log(myTesla.getDescription()); // Output: Model S, Rear facing seats
// Decorate the car with Enhanced AutoPilot option
myTesla = new EnhancedAutoPilot(myTesla);
console.log(myTesla.cost()); // Output: 82000
console.log(myTesla.getDescription()); // Output: Model S, Rear facing seats, Enhanced AutoPilot

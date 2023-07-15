
/*
The code demonstrates the usage of decorator pattern in TypeScript. 
It defines an abstract Car class and two concrete car classes ModelS and ModelX. 
It also defines abstract CarOptions class that extends Car and concrete car options classes EnhancedAutoPilot and RearFacingSeats. 
The CarOptions classes are used to decorate the car objects and add additional features and cost to them. 
The code instantiates a ModelS car, decorates it with RearFacingSeats option, and then decorates it further with EnhancedAutoPilot option. 
Finally, it outputs the cost and description of the decorated car.
*/

/*
 * The decorator pattern is used to dynamically add additional behaviors or features to an object without 
 * modifying its structure. It allows you to extend the functionality of an object at runtime by wrapping 
 * it with one or more decorators. This pattern is useful when you want to add new behaviors to an object 
 * without affecting other objects of the same class.
*/

/**
 * Represents an abstract class for a Car.
 */
abstract class Car {
    public description: string;

    /**
     * Returns the description of the car.
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * Returns the cost of the car.
     */
    public abstract cost(): number;
}

/**
 * Represents a Model S car, extending the Car class.
 */
class ModelS extends Car {
    public description = "Model S";

    /**
     * Returns the cost of the Model S car.
     */
    public cost(): number {
        return 73000;
    }
}

/**
 * Represents a Model X car, extending the Car class.
 */
class ModelX extends Car {
    public description = "Model X";

    /**
     * Returns the cost of the Model X car.
     */
    public cost(): number {
        return 77000;
    }
}

/**
 * Represents an abstract class for Car options, extending the Car class.
 */
abstract class CarOptions extends Car {
    decoratedCar: Car;

    /**
     * Returns the description of the car with options.
     */
    public abstract getDescription(): string;

    /**
     * Returns the cost of the car with options.
     */
    public abstract cost(): number;
}

/**
 * Represents the Enhanced AutoPilot option for a car, extending the CarOptions class.
 */
class EnhancedAutoPilot extends CarOptions {
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    /**
     * Returns the description of the car with Enhanced AutoPilot option.
     */
    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
    }

    /**
     * Returns the cost of the car with Enhanced AutoPilot option.
     */
    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

/**
 * Represents the Rear Facing Seats option for a car, extending the CarOptions class.
 */
class RearFacingSeats extends CarOptions {
    decoratedCar: Car;

    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    /**
     * Returns the description of the car with Rear Facing Seats option.
     */
    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Rear facing seats';
    }

    /**
     * Returns the cost of the car with Rear Facing Seats option.
     */
    public cost(): number {
        return this.decoratedCar.cost() + 4000;
    }
}

// Instantiate a ModelS car
let myTesla = new ModelS();

// Decorate the car with Rear Facing Seats option
myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.cost()); // Output: 77000
console.log(myTesla.getDescription()); // Output: Model S, Rear facing seats

// Decorate the car with Enhanced AutoPilot option
myTesla = new EnhancedAutoPilot(myTesla);

console.log(myTesla.cost()); // Output: 82000
console.log(myTesla.getDescription()); // Output: Model S, Rear facing seats, Enhanced AutoPilot

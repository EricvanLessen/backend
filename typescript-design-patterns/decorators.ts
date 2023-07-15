abstract class Car{
    public description: string;

    // we dont need a constructor, what if we dont define one.

    public getDescription(): string{
        return this.description;
    }

    public abstract cost(): number;
}

class ModelS extends Car{
    public description = "Model S";

    public cost(): number {
        return 73000;
    }
}

class ModelX extends Car{
    public description = "Model X";

    public cost(): number{
        return 77000
    }
}

abstract class CarOptions extends Car {
    decorateCar: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class EnhancedAutoPilot extends CarOptions{
    decoratedCar: Car;

    constructor(car: Car){
        super(); // why
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Enhanced AutoPilot'
    }

    public cost(): number{
        return this.decoratedCar.cost() + 5000; // cost plus cost of the option Enhanced AutoPilot
    }
}

class RearFacingSeats extends CarOptions{
    decoratedCar: Car;

    constructor(car: Car){
        super(); // why
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ', Rear facing seats'
    }

    public cost(): number{
        return this.decoratedCar.cost() + 4000; // cost plus cost of the option Rear facing seats
    }
}
// instantiate a car
let myTesla = new ModelS();

// decorate the car
myTesla = new RearFacingSeats(myTesla)

console.log(myTesla.cost()); // 77000
console.log(myTesla.getDescription()); // Model S, Rear facing seats

// decorate the car
myTesla = new EnhancedAutoPilot(myTesla)

console.log(myTesla.cost()); // 82000
console.log(myTesla.getDescription()); // Model S, Rear facing seats, Enhanced AutoPilot


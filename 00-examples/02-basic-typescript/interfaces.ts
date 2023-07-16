/**
 * Represents an interface for an automobile with optional brand and speed properties,
 * as well as an optional speedMethod function.
 */
/**
 * Represents an interface for an automobile with optional brand and speed properties,
 * as well as an optional speedMethod function.
 */
interface AutomobileInterface {
  brand?: string;
  speed?: number;
  speedMethod?(speed: number): void;
}

/**
 * Represents an interface that extends AutomobileInterface and requires the brand and speed properties.
 * (Interface inheritance)
 */
interface AutomobileInterface2 extends AutomobileInterface {
  brand: string;
  speed: number;
}

/**
 * Represents an object that implements the AutomobileInterface interface.
 */
const automobile: AutomobileInterface = {
  brand: "BMW",
  speed: 20,
  /**
   * Prints the brand and speed of the automobile.
   */
  speedMethod(speed) {
    console.log(`This ${this.brand} is going at ${speed} miles per hour.`);
  },
};

/**
 * Represents an object that implements the AutomobileInterface2 interface.
 */
const automobile2: AutomobileInterface2 = {
  brand: "Porsche",
  speed: 270,
};

/**
 * Represents a function that takes an object that implements
 * the AutomobileInterface and modifies its speed property.
 * @param automobile - The automobile object.
 */
function increaseSpeed(automobile: AutomobileInterface) {
  automobile.speed = 500;
  console.log(`The ${automobile.brand} is now going at ${automobile.speed} miles per hour.`);
}

increaseSpeed(automobile);

/**
 * Represents a class that implements the AutomobileInterface.
 */
class AutomobileClass implements AutomobileInterface {
  brand: string;
  speed: number;

  /**
   * Sets the speed of the automobile.
   * @param speed - The speed value.
   */
  speedMethod(speed: number) {
    console.log(`Hi, my car is going at ${speed} miles per hour.`);
  }
}

let carObject = new AutomobileClass();
carObject.speedMethod(1000);

  
  /**
   * 
   * The code demonstrates the usage of interfaces and classes in TypeScript. 
   * It defines two interfaces AutomobileInterface and AutomobileInterface2 that 
   * describe the properties and methods of an automobile. It also includes an 
   * example of implementing these interfaces with objects and a class. 
   * Additionally, it showcases a function car1 that modifies the speed property 
   * of an automobile object.
   * 
  */
  
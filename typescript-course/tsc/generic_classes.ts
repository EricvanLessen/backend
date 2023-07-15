/**
 * Represents an array of numbers.
 */
let array1a: number[] = [1, 45654, 5463546];
let array1b: Array<number> = [1, 45654, 5463546];

/**
 * Represents an array of strings using the generic syntax.
 */
let array2: Array<string> = ["sadf", "dsaf"];

/**
 * Represents a generic class that takes two types: TYPE1 and TYPE2.
 */
class ObjectGenericsClass<TYPE1, TYPE2 extends string> {
  /**
   * Constructs an instance of the ObjectGenericsClass.
   * @param value1 - The value of TYPE1.
   * @param value2 - The value of TYPE2.
   */
  constructor(public value1: TYPE1, public value2: TYPE2) {}
}

// Example usage with inferred types
let object1 = new ObjectGenericsClass("asdfdsa", "sadfas");

// Example usage with explicit types
let object2 = new ObjectGenericsClass<boolean, string>(true, "asfdsa");


/* The code above demonstrates the usage of generic types and classes in TypeScript.
The array1 variable is declared as an array of numbers using the number[] syntax.
The array2 variable is declared as an array of strings using the Array<string> syntax.
The ObjectGenericsClass is a generic class that takes two type parameters: TYPE1 and TYPE2. It has a constructor that accepts two arguments of the respective types.
Two examples of creating objects of the ObjectGenericsClass are provided: one with inferred types and one with explicit types.
In the inferred example, the compiler infers the types of the arguments based on the provided values.
In the explicit example, the types are explicitly specified as boolean and string.
Usage: Array/List manipulation, Data structures, Utility functions, Object modeling. */
/**
 * Represents a variable that can hold either a number or a string value.
 * @type {(number | string)} The union type variable.
 */
let unionType: number | string;

unionType = "Can be a string"; // Valid assignment of a string value

unionType = 42; // Valid assignment of a number value

// Uncommenting the line below will result in a compilation error,
// as the boolean value is not allowed in the defined union type.
// unionType = false;

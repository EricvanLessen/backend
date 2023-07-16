/**
 * The detected type of the arguments may define the type in the function
 * Represents a function that displays and returns some data of generic type.
 * @param someData - The data to be displayed and returned.
 * @returns The input data of generic type.
 */
function displayData(someData) {
    var someOtherData;
    return someData;
}
// Example usage with a string
var stringData = displayData("Hello, world!");
console.log(stringData); // Output: Hello, world!
// Example usage with a number
var numberData = displayData(42);
console.log(numberData); // Output: 42

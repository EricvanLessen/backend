/**
 * Prints a string message to the console.
 * @returns {string} The string message.
 */
function stringFunction() {
    var res = "HELLO I'm a string";
    console.log(res);
    return res;
}
/**
 * Calculates the sum of two numbers.
 * @param {number} val1 - The first number.
 * @param {number} val2 - The second number.
 * @returns {number} The sum of the two numbers.
 */
function cal(val1, val2) {
    var total = val1 + val2;
    return total;
}
// Example usage
cal(2, 2);
/**
 * Represents a function that takes two numbers as input and returns a number.
 * @param {number} value1 - The first number.
 * @param {number} value2 - The second number.
 * @returns {number} The result of the calculation.
 */
var universal;
universal = cal;
console.log(universal(3, 2));

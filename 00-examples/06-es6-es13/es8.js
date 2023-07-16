/**
 * ES8 (ES2017) released a more perfect async, await, which directly makes asynchronous writing look 
 * like synchronous. The disadvantage is that when the idea falls on complex business logic, 
 * await is sometimes missed and errors are found at runtime. let, const replace var
 * let: general variable, can be overridden.
 * const: Once declared, its content cannot be modified. Because arrays and objects are pointers, 
 * their contents can be increased or decreased without changing their pointers.
 * In the early days, JavaScript’s var scope was global. 
 * That is to say, the variable is declared after use, and it will be automatically raised 
 * to the top level during execution, and will be assigned later.more susceptible to contamination.
 */

/**
 * async, await
 * An asynchronous function is a function declared with the async keyword and the await keyword is 
 * allowed within it. The async and await keywords enable asynchronous, Promise-based behavior to 
 * be written in a more concise manner, avoiding the need to explicitly configure Promise chains.
 */
async test() {
    try {
        const result = await otherAsyncFunction();
        console.log(result); // output result
    } catch(e) {
        console.log(e); // Can catch errors if otherAsyncFunction() throws an error
    }
}

//Object.values()

// Returns all values ​​of the object’s own properties, excluding inherited values.
const exampleObj = {a: 1, b: 2, c: 3, d:4};
console.log(Object.value(exampleObj)); // [1, 2, 3, 4];

// To do the same thing before, use the following notation. much verbose
const values = Object.keys(exampleObj).map(key => exampleObj[key]);


// Object.entries()

// Returns an enumerable key, the value passed in the object itself.

const Obj = {a: 1, b: 2, c: 3, d:4};
console.log(Object.entries(Obj)); // [["a", 1], ["b", 2], ["c", 3], ["d", 4]];

// Usually used with for
for (const [key, value] of Object.entries(Obj)) {
  console.log(`key: ${key}, value: ${value}`);
}
// key: a, value: 1
// key: b, value: 2
// key: c, value: 3
// key: d, value: 4


/** 
 * padStart() & padEnd()
 * You can add additional content to the beginning or end of the string and pad it to the specified length.
 * In the past, these features were often brought in through common helper toolkits such as lodash and 
 * brought together.
 */
String.padStart(fillingLength, FillingContent);
// If the content to be filled is too much and exceeds the "fill length", 
// it will be filled from the leftmost to the upper limit of the length, 
// and the excess will be truncated

/**
 * The most commonly used situation should be the amount, fill in the specified length,
 * and add 0 if it is insufficient.
 */
'100'.padStart(5, 0); // 00100
// If the content to be padded exceeds the "padding length". Then fill in from the left to the upper limit of the length
'100'.padStart(5, '987'); // 98100

// padEnd
'100'.padEnd(5, 9); // 10099
// If the content to be padded exceeds the "padding length". Then fill in from the right to the upper limit of the length
'100'.padEnd(5, '987'); // 10098


// trailing comma

// ECMAScript 2017 supports trailing commas in function parameters.
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};

/**
 * Object.getOwnPropertyDescriptors()
 * Get your own descriptors, which are usually not used by 
 * general development business requirements.
 */
const exampleObj = {a: 1, b: 2, c: 3, d:4};
Object.getOwnPropertyDescriptors(exampleObj);
// {a: {…}, b: {…}, c: {…}, d: {…}}
// a: {value: 1, writable: true, enumerable: true, configurable: true}
// b: {value: 2, writable: true, enumerable: true, configurable: true}
// c: {value: 3, writable: true, enumerable: true, configurable: true}
// d: {value: 4, writable: true, enumerable: true, configurable: true}
// __proto__: Object


/**
 * shared array buffer
 * SharedArrayBuffer is a fixed-length buffer of raw binary data, similar to ArrayBuffer.
 * Can be used to create data on shared memory. Unlike ArrayBuffer, SharedArrayBuffer cannot be detached.
 * Atomics object
 * An Atomics object that provides a set of static methods to perform atomic operations on a SharedArrayBuffer.
 * All properties and functions of atoms are static, just like mathematics, there is no new one.
 * If a multi-thread reads and writes data at the same location at the same time, the atomic operation ensures
 * that the data being operated is as expected: that is, the next sub-operation is executed after the previous 
 * sub-operation is completed, and the operation is not interrupted.
 * It can be said that it is a function enhanced for the development of multi-threaded Server in Node.Js, 
 * and the chance of using it in front-end development is quite low. chrome already provides support.
 */

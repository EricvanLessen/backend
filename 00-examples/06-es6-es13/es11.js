// ES11 (ES2020)

/**
 * Promise.allSettled()
 * The Promise.allSettled() method returns a Promise that is fulfilled when all given Promises have been 
 * fulfilled or rejected, with an array of objects each describing the outcome of each Promise.
 * It’s typically used when you have multiple async tasks that don’t depend on each other completing 
 * successfully, or when you always want to know the result of each promise.
 * In contrast, Promises returned by Promise.all() may be more appropriate if tasks 
 * depend on each other / if you want any of them to reject immediately.
 */
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];
Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));
// expected output:
// "fulfilled"
// "rejected"



// The optional chaining operator (?.) allows for safe navigation of nested properties or methods,
// preventing errors when intermediate properties are null or undefined.
// It short-circuits and returns undefined if any property in the chain is not accessible.

const user = {
    name: 'John',
    address: {
      street: '123 Main St',
      city: 'New York',
    },
  };
  
  // Accessing nested properties with optional chaining
  const street = user.address?.street;
  console.log(street); // Output: '123 Main St'
  
  const zipCode = user.address?.zipCode;
  console.log(zipCode); // Output: undefined
  
  // The nullish coalescing operator (??) provides a concise way to provide a default value
  // for variables that might be null or undefined.
  // It returns the right-hand side value only if the left-hand side is nullish (null or undefined).
  
  const name = null;
  const defaultName = 'Guest';
  
  // Using nullish coalescing to provide a default value
  const displayName = name ?? defaultName;
  console.log(displayName); // Output: 'Guest'
  

// Dynamic imports in ECMAScript 2020 (ES11) allow for importing modules dynamically at runtime,
// enabling more flexible and efficient loading of JavaScript code.

// Importing a module dynamically using the 'import()' function
import('./module.js')
.then((module) => {
  // Use the imported module
  module.doSomething();
})
.catch((error) => {
  // Handle any errors during the dynamic import
  console.log('An error occurred while importing the module:', error);
});

// Dynamic imports allow for lazy-loading of modules, where the module is loaded only when needed,
// improving performance and reducing initial load times for large applications.

// The 'import()' function returns a promise that resolves to the imported module,
// allowing you to use it asynchronously with the 'then()' method.
// You can also handle any errors that occur during the import using the 'catch()' method.

// Dynamic imports are particularly useful when working with code splitting and dynamic module loading scenarios,
// where you want to load modules on-demand based on specific conditions or user interactions.

// Note: Dynamic imports are not supported in all environments (e.g., older browsers, Node.js versions).
// To ensure compatibility, you may need to use a module bundler or transpiler that supports dynamic imports.



// In ECMAScript 2020 (ES11), the global `this` value is standardized and can be accessed
// using the `globalThis` keyword, providing a consistent way to refer to the global object
// regardless of the execution context.

// Accessing the global object using `globalThis`
const globalObject = globalThis;

// The `globalThis` keyword ensures cross-environment compatibility
// by providing a single, unified way to access the global object.
// It works in different environments such as browsers, Node.js, Web Workers, and more.

// Prior to ES11, the global object was accessed using different variations,
// such as `window` in browsers and `global` in Node.js. This inconsistency
// posed challenges when writing code that needed to work across multiple environments.

// With the introduction of `globalThis`, you can now write code that works consistently
// across different environments by using `globalThis` to access the global object.

// Note that `globalThis` is a read-only property and cannot be overwritten,
// ensuring that the global object remains accessible in a predictable manner.

// The use of `globalThis` provides a more robust and reliable way to interact with the global object,
// making it easier to write code that works seamlessly across different JavaScript environments.





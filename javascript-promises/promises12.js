// Static methods: Promise.resolve and Promise.reject
function logToConsole(somePromise) {
  somePromise.then(value => console.log(value));
}

const somePromise = Promise.resolve('Hello');

// Resolves the promise
logToConsole(somePromise);

const value = 'string';

// Converting a value to a promise using Promise.resolve
const promisifiedValue = Promise.resolve(value);
logToConsole(promisifiedValue);
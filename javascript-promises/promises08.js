// throws an error, needs to be instantiated with arguments
const a1 = new Promise((resolve, reject) => {
  // Placeholder
});

// is invoked immediately but is never resolved
const a2 = new Promise((resolve, reject) => {
  console.log('Executor function is invoked');
});

const a3 = new Promise((resolve, reject) => {
  reject(new Error('Network error'));
});

// once the status is resolved or rejected, it is fixed

// will stay resolved with value 'first value'
const a4 = new Promise((resolve, reject) => {
  resolve('first value');
  resolve('second value');
  reject(new Error('first value'));
  reject(new Error('second value'));
});

// will stay rejected with value 'first value'
const a5 = new Promise((resolve, reject) => {
  reject(new Error('first value'));
  reject(new Error('second value'));
  resolve('first value');
  resolve('second value');
});

// a promise that is not resolved or rejected stays pending
const a6 = new Promise((resolve, reject) => {
  // Placeholder
});

// then has a fulfillment function as the first argument if the promise was resolved. The function has one argument, which is the fulfillment value
const a7 = new Promise((resolve, reject) => {
  resolve('Hello world');
});

a7.then((value) => {
  console.log("Resolved: " + value);
});

// then has a rejection function as the second argument if the promise was rejected. The function has one argument, which is the rejection reason
const a8 = new Promise((resolve, reject) => {
  reject('Hello world');
});

a8.then(undefined, (reason) => {
  console.log("Rejected: " + reason);
});

// function that returns a promise
function sum(a, b) {
  const result = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject(new Error('Both arguments should be numbers'));
    } else {
      resolve(a + b);
    }
  });
  return result;
}

sum(1, 2).then((value) => {
  console.log('The result is ' + value);
}, (reason) => {
  console.log('Error: ' + reason);
});

sum('wrong', 'argument').then((value) => {
  console.log('The result is ' + value);
}, (reason) => {
  console.log('Error: ' + reason);
});
// any value is not a promise, how to reject a value: convert to a promise.
const rejectedPromise1 = Promise.reject(value);
logToConsole(rejectedPromise1);

// any value is not a promise, how to reject a value: convert to a promise.
const rejectedPromise2 = Promise.reject(new Error('some error'));
logToConsole(rejectedPromise2);
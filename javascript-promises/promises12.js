// static methods: promise.resolve and promise.reject
function logToConsole(somePromise) {
    somePromise.then(value => console.log(value));
}

const somePromise = new Promise(
    (resolve, reject) => resolve('Hello')
)

// resolves the promise
logToConsole(somePromise);

const value = 'string'



// any value is not a promise, how to resolve a value: convert to a promise.
const promisifiedValue = Promise.resolve(value);

logToConsole(promisifiedValue);




// any value is not a promise, how to reject a value: convert to a promise.
const rejectedPromise = Promise.resolve(value);

logToConsole(rejectedPromise);
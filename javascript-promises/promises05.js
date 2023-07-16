// The Promise `a7` is resolved with the value 'Hello world'
const a7 = new Promise(function(resolve, reject){
    resolve('Hello world');
});

// The `then` method is used to handle the fulfillment of the promise
a7.then(function(value){
    console.log("Resolved: " + value);
});

// The Promise `a8` is rejected with the reason 'Hello world'
const a8 = new Promise(function(resolve, reject){
    reject('Hello world');
});

// The `then` method is used to handle the rejection of the promise
a8.then(undefined, function(reason){
    console.log("Rejected: " + reason);
});

// A function `sum` is defined that returns a promise
function sum(a, b) {
    const result = new Promise(function(resolve, reject) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return reject(new Error('Both arguments should be numbers'));
        }
        return resolve(a + b);
    });
    return result;
}

// The `then` method is used to handle the fulfillment or rejection of the promise returned by `sum`
sum(1, 2).then(function(value){
    console.log('The result is ' + value);
}, function (reason) {
    console.log('Error: ' + reason);
});

sum('wrong', 'argument').then(function(value){
    console.log('The result is ' + value);
}, function (reason) {
    console.log('Error: ' + reason);
});
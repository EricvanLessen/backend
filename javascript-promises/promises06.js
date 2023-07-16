// The Promise `a8` is rejected with the reason 'Hello world'
const a8 = new Promise(function(resolve, reject){
    reject('Hello world');
});

// The `catch` method is used to handle the rejection of the promise
a8.catch(function(reason){
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
}).catch(function (reason) {
    console.log('Error: ' + reason);
});

sum('wrong', 'argument').then(function(value){
    console.log('The result is ' + value);
}).catch(function (reason) {
    console.log('Error: ' + reason);
});
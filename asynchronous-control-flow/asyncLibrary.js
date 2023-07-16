// The code above uses the 'async' library to execute two asynchronous tasks in parallel.
// It creates an array of two async functions that return Promises.
// The first async function resolves a Promise with the value 'Like'.
// The second async function resolves a Promise with the value 'Share'.

const async = require('async');


// output: response ['Like', 'Share']
async
.parallel([
    async () => await Promise.resolve('Like'),
    async () => await Promise.resolve('Share'),
])
.then(response => {
    console.log('response', response);
})
.catch(err => {
    console.log(err);
})


/**
Difference to Promise.all()
The difference between async.parallel and Promise.all lies in their purpose and behavior:
async.parallel is a method from the async library, which provides a collection of utility 
functions for handling asynchronous operations in JavaScript. It allows you to execute multiple 
asynchronous tasks in parallel and collects the results into an array.
Promise.all is a built-in method in JavaScript that takes an iterable (usually an array) of Promises 
and returns a new Promise that is fulfilled with an array of resolved values from the input Promises. 
It waits for all the Promises to settle, whether they resolve or reject, and returns the results in 
the same order as the original array.
In terms of usage, both methods are used for executing multiple asynchronous tasks concurrently. 
However, the async.parallel method provides more flexibility and control over the execution flow. 
It allows you to handle asynchronous tasks that are not necessarily Promises and provides additional
options for controlling the concurrency level.
On the other hand, Promise.all is more streamlined and built into JavaScript itself, making it a 
common choice for handling multiple Promises in a straightforward manner. It simplifies the process of waiting for multiple Promises to settle and gathering their results.
In summary, the main difference is that async.parallel is part of the async library and provides 
more advanced functionality, while Promise.all is a native JavaScript method specifically designed 
for handling Promises.
 
 */



// Two examples demonstrating the usage of async.forEachOfLimit with different concurrency limits
// Example 1: Concurrency limit of 1 (processed sequentially)
const asyncLib = require('async');

const items1 = ['item1', 'item2', 'item3'];

asyncLib.forEachOfLimit(items1, 1, (item, index, callback) => {
    // Simulating an asynchronous task
    setTimeout(() => {
        console.log(`Processing item ${item}`);
        callback();
    }, 1000);
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('All items processed');
    }
});

// Example 2: Concurrency limit of 2 (processed in parallel)
const async = require('async');

const items2 = ['item1', 'item2', 'item3'];

async.forEachOfLimit(items2, 2, (item, index, callback) => {
    // Simulating an asynchronous task
    setTimeout(() => {
        console.log(`Processing item ${item}`);
        callback();
    }, 1000);
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('All items processed');
    }
});





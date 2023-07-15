/**
 * @returns In the first code snippet, the `Promise.all()` function is used to handle multiple promises. 
 * It takes an array of promises as input and returns a new promise that is fulfilled with an array of 
 * resolved values from the input promises, in the same order as the original array. If any of the promises 
 * in the array rejects (throws an error or returns a rejected promise), the `Promise.all()` will immediately 
 * reject with the reason of the first rejected promise. In the second code snippet, the `.catch()` method 
 * is used to handle any rejections individually for each promise. By attaching `.catch()` to each promise, 
 * we can handle the rejection and return a custom value instead of propagating the error further. 
 * The difference between the two approaches is how they handle the rejection. In the first code snippet, 
 * a single rejection from any promise will cause the entire `Promise.all()` to reject immediately, 
 * without executing the remaining promises. In the second code snippet, the individual `.catch()` 
 * statements allow each promise to resolve with a custom value instead of propagating the error, 
 * and the `Promise.all()` will still resolve with an array of resolved/rejected values for each promise. 
 * In summary, the second code snippet provides more fine-grained control over the rejection handling of each promise in the array, allowing custom handling for each promise's rejection.
 */

function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}

function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Not suitable car'), 5000);
    });
}

function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

// Not suitable car, Promise.all rejects for the first rejected promise immediately
Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices)
    })
    .catch(error => {
        console.log(error)
    })

// [ 8000, 'Not suitable car', 10000 ]
Promise.all([
        askFirstDealer().catch(error=>{return error}),
        askSecondDealer().catch(error=>{return error}), 
        askThirdDealer().catch(error=>{return error})
    ])
    .then(prices => {
        console.log(prices)
    })
    .catch(error => {
        console.log(error)
    })

// First one to answer: 8000
Promise.race([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices)
    })
    // rejected
    .catch(reason => {
        console.log(reason)
    })
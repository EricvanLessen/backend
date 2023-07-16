/**
 * The `Promise.all()` method is used to handle multiple promises. It takes an array of promises as input
 * and returns a new promise that is fulfilled with an array of resolved values from the input promises, 
 * in the same order as the original array. If any of the promises in the array rejects (throws an error or 
 * returns a rejected promise), the `Promise.all()` will immediately reject with the reason of the first 
 * rejected promise.
 * 
 * In the first code snippet, the `Promise.all()` method is used to handle an array of promises: `askFirstDealer()`,
 * `askSecondDealer()`, and `askThirdDealer()`. This method waits for all promises to settle and then resolves 
 * with an array of their results. If any of the promises reject, the entire `Promise.all()` call will reject 
 * with the reason of the first rejected promise. This behavior is demonstrated by the second code snippet, 
 * where the second dealer rejects with the reason 'Not suitable car'. In this case, the `Promise.all()` call 
 * immediately rejects and the rejection reason is logged to the console.
 * 
 * To handle individual rejections without causing the entire `Promise.all()` to reject, the `.catch()` method 
 * is attached to each promise. This is shown in the third code snippet. By attaching `.catch()` to each promise, 
 * individual rejections can be handled separately, and the `Promise.all()` will still resolve with an array 
 * of resolved/rejected values for each promise. In this case, the rejected promise's rejection reason is caught 
 * and returned as the value, allowing the `Promise.all()` to continue with the remaining promises.
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
        console.log(prices);
    })
    .catch(error => {
        console.log(error);
    });

// [ 8000, 'Not suitable car', 10000 ]
Promise.all([
        askFirstDealer().catch(error => error),
        askSecondDealer().catch(error => error), 
        askThirdDealer().catch(error => error)
    ])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log(error);
    });

// First one to answer: 8000
Promise.race([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices);
    })
    .catch(reason => {
        console.log(reason);
    });
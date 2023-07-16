function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}

function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);
    });
}

function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

// Promise resolves when all promises are resolved
Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices);
    });

// Promise resolves with an array of results [1, 'string', true]
Promise.all([1, "string", true])
    .then(results => {
        console.log(results);
    });

// Promise resolves with an empty array []
Promise.all([])
    .then(results => {
        console.log(results);
    });
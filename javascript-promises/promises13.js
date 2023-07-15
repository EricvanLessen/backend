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

// promise resolves if all promises are resolved or when this array contains no promise

// [ 8000, 12000, 10000 ]
Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
    .then(prices => {
        console.log(prices)
    });

//[ 1, 'string', true ]
Promise.all([1, "string", true])
    .then(results => {
        console.log(results)
    })

// []
Promise.all([])
.then(results => {
    console.log(results)
})
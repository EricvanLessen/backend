// chained promises
// use chained promises to avoid call-back hell
// all errors are handled in one place, error handling is not spread over the code

// function that returns a promise
function sum(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return reject(new Error('Both arguments should be numbers'));
        }
        resolve(a + b);
    });
}

// function that returns a promise
function square(a) {
    return new Promise(function(resolve, reject) {
        if (typeof a !== 'number') {
            return reject(new Error('Argument should be a number'));
        }
        resolve(a * a);
    });
}

sum(1, 2)
    .then(function(result) {
        return square(result);
    })
    .then(function(finalResult) {
        console.log(finalResult);  // This should print 9
    })
    .catch(function(error) {
        console.error('Error:', error.message);
    });

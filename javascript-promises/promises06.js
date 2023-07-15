
// then has a rejection function as second argument if the promise was resolved. The function has one argument, that is the rejection reason
const a8 = new Promise(function(resolve, reject){
    reject('Hello world')
})

a8.then(function(reason){
    console.log("Rejected: " + reason)
})

// function that returns a promise
function sum(a,b) {
    const result = new Promise(function(resolve, reject) {
        if (typeof a!== 'number' || typeof b !== 'number') {
            return reject(new Error('Both arguments should be numbers'));
        }
        return resolve(a+b)
    });
    return result
}

sum(1,2).then(function(value){
    console.log('The result is ' + value);
    }, function (reason) {
        console.log('Error:' + reason);
    })

sum('wrong','argument').then(function(value){
    console.log('The result is ' + value);
    }, function (reason) {
        console.log('Error:' + reason);
    })
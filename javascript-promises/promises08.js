// throws an error, needs to be instantiated with arguments
const a1 = new Promise()

// is invoked immediately but is never resolved
const a2 = new Promise(function (resolve, reject){
    console.log('Executor function is invoked')
})

const a3 = new Promise(function(resolve, reject){
    reject(new Error('Network error'))
})

// once the status is resolved, or rejected the status is fixed

// will stay resolved with value 'first value' 
const a4 = new Promise(function(resolve, reject){
    resolve('first value')
    resolve('second value')
    reject(new Error('first value'))
    reject(new Error('second value'))
})

// will stay rejected with value 'first value' 
const a5 = new Promise(function(resolve, reject){
    reject(new Error('first value'))
    reject(new Error('second value'))
    resolve('first value')
    resolve('second value')
})

// a promise that is not resolve or rejected stays pending
const a6 = new Promise(function(resolve, reject){

})


// then has a fullfillment function as firts argument if the promise was resolved. The function has one argument, that is the fillfilmment value
const a7 = new Promise(function(resolve, reject){
    resolve('Hello world')
})

a7.then(function(value){
    console.log("Resolved: " + value)
})

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
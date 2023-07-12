
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

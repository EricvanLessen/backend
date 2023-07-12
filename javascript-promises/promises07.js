
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

// is invoked immediately but is never resolved
const a2 = new Promise(function (resolve, reject){
    console.log('Executor function is invoked')
})

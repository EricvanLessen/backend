// We can add functions to the exports objects, 
// so that a method is available in the entire application. 
// The entire application is running in the process. 
console.log(`PROCESS: ${process}`);
console.log("PROCESS:", process);

// arrow functions have no own context, 
// this would point to the entire context
const sum = (a,b) => a + b;

/*
module.exports = {
    sum,
    
}
*/

exports.sum = (a,b) => a + b;
exports.diff = (a,b) => a - b;
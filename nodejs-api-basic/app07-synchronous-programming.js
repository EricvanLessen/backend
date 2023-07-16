/*
    Node is single threaded non blocking i/o model
    non-locking event loop
    keeps events in a stack
    executed one by one without waiting for one to complete
    completion during other callbacks
*/
const fs = require("fs");
const fileName = "target.txt";
const data = fs.readFileSync(fileName)
console.log(data.toString())
console.log("Node js async programming ...?")


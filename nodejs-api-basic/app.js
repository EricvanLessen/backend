/*
    Node is single threaded non blocking i/o model
    non-locking event loop
    keeps events in a stack
    executed one by one without waiting for one to complete
    completion during other callbacks
*/
const fs = require("fs");
const fileName = "target.txt";

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
    if(err) errHandler(err);
    dataHandler(data);
});

console.log("Node js async programming ...?")
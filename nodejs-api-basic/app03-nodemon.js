const {sum, diff} = require("./helpers");
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("hello world form node js updated now");
})

server.listen(3000);

const total = sum(10, 100);
const difference = diff(100, 10);

console.log(`Total: ${total}`);
console.log(`Difference: ${difference}`);
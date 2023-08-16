const http = require('http');

const routes = require('./routes');

console.log(routes.someText);
console.log(routes.anotherHandler);

// next gen js
// callback function is called 
// when a request reaches the server
const server = http.createServer(routes.handler);

server.listen(3000);
console.log("Server started");
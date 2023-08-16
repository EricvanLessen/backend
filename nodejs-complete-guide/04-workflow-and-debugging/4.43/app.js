const http = require('http');

const routes = require('./routes');

console.log(routes.someText);
console.log(routes.anotherHandler);

// next gen js
// callback function is called 
// when a request reaches the server
const server = http.createServer(routes.handler);

const port = 3000;
server.listen(port);
console.log(`Server started on port: ${port}`);
const http = require('http');

const routes = require('./3.38-routes');

// next gen js
// callback function is called 
// when a request reaches the server
const server = http.createServer(routes);

server.listen(3000);
console.log("Server started");

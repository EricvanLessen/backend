const http = require('http');

// next gen js
// callback function is called 
// when a request reaches the server
const server = http.createServer((req, res) => {
    // we log the request
    console.log(req);
});

server.listen(3000);
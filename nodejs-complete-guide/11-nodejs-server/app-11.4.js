const http = require('http');

// next gen js
// callback function is called 
// when a request reaches the server
const server = http.createServer((req, res) => {
    // output request attributes
    console.log(req.url);
    console.log(req.method);
    console.log(req.header);
});

server.listen(3000);
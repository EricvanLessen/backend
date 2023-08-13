const http = require('http');

// next gen js
// callback function is called 
// when a request reaches the server
const server = http.createServer((req, res) => {
    // output request attributes
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title></title></head>');
    res.write('<body><h1>Hello from my NodeJS Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
const http = require('http');
const fs = require('fs');

// next gen js
// callback function is called 
// when a request reaches the server
const server = http.createServer((req, res) => {
    const url = req.url; 
    const method = req.method;
    if (url === '/') {
        // output request attributes
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title></title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();    
    }
    // set a redirect 
    if (url === '/message' && method === 'POST') {
        const body = [];
        // executed when data comes in
        req.on('data', (chunk) => {
            // edit the data the object by pushing the chunk
            // node will repeat this until the data empty
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    // output request attributes
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title></title></head>');
    res.write('<body><h1>Hello from my NodeJS Server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
console.log("Server started");
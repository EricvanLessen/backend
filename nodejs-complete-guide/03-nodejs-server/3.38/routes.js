const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        // output request attributes
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello</title></head>');
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
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            let message = parsedBody.split('=')[1];
            message = decodeURIComponent(message.replace(/\+/g, " "));
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    // output request attributes
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title></title></head>');
    res.write('<body><h1>Hello from my NodeJS Server!</h1></body>');
    res.write('</html>');
    res.end();
}

exports.anotherHandler = 'Another hard coded text';

exports.handler = requestHandler;

exports.someText = 'Some hard coded text';
const fs = require('fs');

let users = ['User 1'];

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello and Welcome, Create a new user</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="create-user"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.statusCode = 202;
        res.end();
    }

    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        let greeting = '<ul>';
        console.log(users);
        users.forEach(user => {
            console.log(user);
            greeting = greeting + '<li>' + user +'</li>';
        });
        greeting += '</ul>';
        console.log(users.length);
        res.write(greeting);
        res.statusCode = 202;
        res.end();
    }

    if(url==='/create-user' && method  ==='POST'){
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            users.push(decodeURIComponent(user.replace(/\+/g, " ")));
            console.log(users);
            fs.writeFile('users.txt', user, err => {
                console.log(user);
                res.statusCode = 302;
                res.setHeader('Location', '/users');
                res.end();
            });
        });
    };
};

exports.requestHandler = requestHandler;
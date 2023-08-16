const express = require('express');

const app = express();

// accepts an array of request handlers
// will be executed for every incoming request
// next is a function that is passed
// next has to be executed to allow the request to travel on to the next middleware
app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

const port = 3000;

app.listen(port);

console.log(`Server started on port: ${port}`);
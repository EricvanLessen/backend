const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log("Users");
    res.send("<h1>Users page</h1>");
});

app.use('/', (req, res, next) => {
    console.log("Landing");
    res.send("<h1>Landing page</h1>");
});

const port = 3000;
app.listen(port);

console.log(`server stated on port ${port}`)
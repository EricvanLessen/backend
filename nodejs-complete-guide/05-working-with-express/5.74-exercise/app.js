const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/users')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoute);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

const port = 3000
app.listen(port);

console.log(`Server started on port: ${port}`)
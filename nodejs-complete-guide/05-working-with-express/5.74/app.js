const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//forward file requests to the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    console.log(__dirname)
    res.status(404);
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

const port = 3000;

app.listen(port);

console.log(`Server started on port: ${port}`);
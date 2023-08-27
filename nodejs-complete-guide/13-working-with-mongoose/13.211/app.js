const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController = require('./controllers/404');
const User = require('./models/user');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    User.findById("64ebbeff3e50da79fb0a1e91")
    .then(user => {
        req.user = user;
        next();
    }).
    catch((err) => {
        console.log(err)
    });
});

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use(errorController.get404);


mongoose.connect("mongodb+srv://ericvanlessen:JYAqHNk79C2tLk@cluster0.1qzfncf.mongodb.net/shop?retryWrites=true&w=majority")
.then(result  => {
    User.findOne().then(user => {
        if(!user){
            const user = new User({
                name: 'Eric',
                email: 'eric@test.com',
                cart: {
                    items: []
                }
            });
            user.save();
        }
    })
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})

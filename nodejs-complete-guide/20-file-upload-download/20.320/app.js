const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session)
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer');

const MONGODB_URI = "";

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
let csrfProtection = csrf();
app.use(flash());

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname );
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetyoe === 'image/jpg' || file.mimetype === 'image/jepg'){
        cb(null, true);
    } else {
        cb(null, false);
    }
}

app.set('view engine', 'ejs');
app.set('views', 'views');

const errorController = require('./controllers/404');
const User = require('./models/user');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter}).single('image'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images',express.static(path.join(__dirname, 'images')));
app.use(session({
    secret: 'my secret', 
    resave: false, 
    saveUninitialized: false, 
    store: store
}));

app.use(csrfProtection);

// helper middleware to create a mongoose session
app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    };
    User.findById(req.session.user._id)
    .then(user => {
        if (!user) {
            return next();
        }
        req.user = user;
        next();
    }).
    catch((err) => {
        // other problem than non existing user
        throw new Error(err);
    });
})

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
})

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use(authRoutes);

app.use('/500', errorController.get500);

app.use(errorController.get404);

// error hanlding middleware
app.use((error, req, res, next) => {
    /// res.render(error.httpStatusCode).render(...)
    res.redirect('/500')
})

mongoose.connect(MONGODB_URI)
.then(()  => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})

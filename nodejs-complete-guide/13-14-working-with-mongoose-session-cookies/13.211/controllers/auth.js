const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    // const isLoggedIn = true; // req.get('Cookie').split(';')[0].trim().split('=')[1];
    res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: req.session.isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    // will be send with every request
    // cross request data storage
    // res.setHeader('Set-Cookie', 'loggedIn=true; Max-Age=10;');
    req.session.isLoggedIn = true;
    User.findById("64ebbeff3e50da79fb0a1e91")
    .then(user => {
        req.session.user = user;
        req.session.save(err => {
            if (err) {
                console.log(err)
            }
            res.redirect('/');
        })
    }).
    catch((err) => {
        console.log(err)
    });
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    });
};
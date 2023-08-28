const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const User = require('../models/user');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "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"
    }
}));

exports.getLogin = (req, res, next) => {
    // const isLoggedIn = true; // req.get('Cookie').split(';')[0].trim().split('=')[1];
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    // used if we have an error flash
    errorMessage: message
    });
};

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email})
    .then(user => {
        if(!user){
            req.flash('error', 'Invalid email');
            return res.redirect('/login');
        }
        bcrypt.compare(password, user.password)
        .then(doMatch => {
            console.log('do match', doMatch)
            if (doMatch) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(err => {
                    console.log(err);
                    res.redirect('/');
                });
            } 
            req.flash('error', 'Invalid password');
            res.redirect('/login')
        })
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        })
    }).
    catch((err) => {
        console.log(err)
    });
};

exports.getSignup = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        errorMessage: message
    });
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email})
    .then(userDoc => {
        console.log("got user: ", userDoc)
        if (userDoc){
            req.flash('error', 'E-Mail exists already, please pick a different one.')
            return res.redirect('/signup');
        }
        return bcrypt.hash(password, 12)
        .then(hashedPassword => {  
            const user = new User({
                email: email,
                password: hashedPassword,
                cart: { itmes: [] }
            });
            console.log(email, password)
            return user.save();
        })
        .then(() => {
            res.redirect('/login');
            return transporter.sendMail({
                to: email,
                from: 'eric.vanlessen@googlemail.com',
                subject: 'Signup succeeded',
                html: '<h1>You successfully signed up</h1>'
            })
            
        })
        .catch(err => {
            console.log(err)
        });
    })
    .catch(err => {
        console.log(err)
    });
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    });
};

exports.getReset = (req, res, next) => {
    let message = req.flash('error');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    res.render('auth/reset', {
        path: '/reset',
        pageTitle: 'Reset Password',
        errorMessage: message
    });
}
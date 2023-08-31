const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const nodemailer = require('nodemailer');
const sendgridTransport =  require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator');


const User = require('../models/user');
const { reset } = require('nodemon');

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
        errorMessage: message,
        oldInput: {
            email: '',
            password: ''
        },
        validationErrors: []
    });
};

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(422).render('auth/login', {
            path: '/login',
            pageTitle: 'Login',
            errorMessage: errors.array()[0].msg,
            oldInput: {
                email: email, 
                password: password
            },
            validationErrors: errors.array()
        });
    }

    User.findOne({email:email})
    .then(user => {
        if(!user){
            return res.status(422).render('auth/login', {
                path: '/login',
                pageTitle: 'Login',
                errorMessage: 'Invaild email or password.',
                oldInput: {
                    email: email, 
                    password: password
                },
                validationErrors: []
            });
        }
        console.log('user',user)
        console.log(password)
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
            return res.status(422).render('auth/login', {
                path: '/login',
                pageTitle: 'Login',
                errorMessage: 'Invaild email or password.',
                oldInput: {
                    email: email, 
                    password: password
                },
                validationErrors: []
            }); 
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
        errorMessage: message,
        oldInput: {
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationErrors: []
    });
};

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        console.log(errors.array());
        console.log(1)
        return res.status(422).render('auth/signup', {
            path: '/signup',
            pageTitle: 'Signup',
            errorMessage: errors.array()[0].msg,
            oldInput: { email: email, 
                password: password, 
                confirmPassword: req.body.confirmPassword 
            },
            validationErrors: errors.array()
        });
    }
    bcrypt.hash(password, 12)
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
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
    });
};

exports.getReset = (req, res, next) => {
    let message = req.flash('error', '');
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

exports.postReset = (req, res, next) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err);
            return res.redirect('/reset');
        }
        const token = buffer.toString('hex');

        User.findOne({email: req.body.email})
        .then(user=> {
            if(!user){
                console.log("no such user");
                req.flash('error', 'No account with that email found.');
                return res.redirect('/reset');
            }
            user.resetToken = token;
            user.resetTokenExpiration = Date.now() + 3600000;
            return user.save();
        })
        .then(() =>{
            res.redirect('/')
            return transporter.sendMail({
                to: req.body.email,
                from: 'eric.vanlessen@googlemail.com',
                subject: 'Password reset',
                html: ` <p>You requested a password reset</p>
                        <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> 
                        to set a new password.</p>`
            });
        })
        .catch(err => {
            console.log(err) 
        });
    });
}

exports.getNewPassword = (req, res, next) => {
     const token = req.params.token;
     console.log(token);
     User.findOne({resetToken: token, resetTokenExpiration: {$gt: Date.now()}})
     .then(user => {
        let message = req.flash('error');
        if (message.length > 0) {
            message = message[0];
        } else {
            message = null;
        }
        return res.render('auth/new-password', {
            path: '/new-password',
            pageTitle: 'New Password',
            errorMessage: message,
            userId: user._id.toString(),
            passwordToken: token
        })
    })
     .catch(err => {
        console.log(err);
     });
};

exports.postNewPassword = (req, res, next) => {
    const newPassword = req.body.password;
    const userId = req.body.userId;
    const passwordToken = req.body.passwordToken;
    let resetUser;

    User.findOne({
        resetToken: passwordToken,
        resetTokenExpiration: {$gt: Date.now()},
        _id: userId
    })
    .then(user => {
        resetUser = user;
        return bcrypt.hash(newPassword, 12);
    })
    .then(hashedPassword => {
        console.log(resetUser);
        resetUser.password = hashedPassword;
        resetUser.resetToken = undefined;
        resetUser.resetTokenExpiration = undefined;
        return resetUser.save()
    })
    .then(() => {
        res.redirect('/login')
    })
    .catch(err => {
        console.log(err);
     });
}
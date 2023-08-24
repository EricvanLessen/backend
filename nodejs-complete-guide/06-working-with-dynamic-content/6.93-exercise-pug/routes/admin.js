const express = require('express');
const router = express.Router();
const users = [];
router.get('/add-user', (req, res, next) => {
    res.render('add-user', {pageTitle:'Admin Page'});
});
router.post('/add-user', (req, res, next) => {
    const username = req.body.username;
    users.push({username:username});
    res.redirect('/');
});
exports.routes = router;
exports.users = users;

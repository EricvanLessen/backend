const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//__dirname will point to the location where it is used
router.get('/',(req, res, next) => {
    res.status(200);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router
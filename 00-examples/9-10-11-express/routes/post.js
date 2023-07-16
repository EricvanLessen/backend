// extracting the logic from the routes to the controller

const express = require('express');

// access methods from the controller
const {getPosts, createPosts} = require('../controllers/post');
const validator = require('../validator');

const router = express.Router();

router.get("/", getPosts);
router.post("/post", validator.createPostValidator, createPosts);

// export any route handling
module.exports = router;
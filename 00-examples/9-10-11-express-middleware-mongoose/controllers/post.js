const Post = require("../models/post")

exports.getPosts = (req, res) => {
    "return id, title, and body"
    const posts = Post.find().select("_id title body")
    .then((posts) => {
        // default status is 200, leave the status away
        /*res.status(200).json({
            // key and value have the same name, only write them once
            posts: posts
        });*/
        res.json({
            posts
        });
    })
    .catch(err => console.log(err));
}

// callbacks are depreciated in mongoose
// use async/await or promises if async functions don't work for you
exports.createPosts = async (req, res) => {
    const post = new Post(req.body);
    /*
    console.log(`CREATING POST: ${post}`);
    try{
        const result = await post.save()
        res.status(200).json({
            post: result
        })
    } catch(err) {
        res.status(400).json({
            error:err
        });
    }*/
    post.save()
    .then(result=> {
        res.json({
            post: result
        });
    })
};
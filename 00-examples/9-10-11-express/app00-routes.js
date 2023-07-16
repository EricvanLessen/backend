const express = require("express");
const app = express();

// bring in routes
const {getPosts} = require('./routes/post');

app.get("/", getPosts)

port = 8080
app.listen(port, () => {
    console.log(`A Node Js API is listeninig on port ${port}`)
});


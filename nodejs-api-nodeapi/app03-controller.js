const express = require("express");
const app = express();
const morgan = require("morgan");

// bring in routes
const postRoutes = require('./routes/post');

const myFancyAuthentication = (req, res, next) => {
    console.log("Authentication middleware not applied yet!!!");
    next();
};

// middleware
app.use(morgan("dev"));
app.use(myFancyAuthentication);

// use instead of get, we use postRoutes from ./routes/post as middleware
app.use("/", postRoutes)

port = 8080
app.listen(port, () => {
    console.log(`A Node Js API is listeninig on port ${port}`)
});


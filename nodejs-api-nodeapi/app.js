const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

// db connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`)
});

// bring in routes
const postRoutes = require('./routes/post');

const myFancyAuthentication = (req, res, next) => {
    console.log("Authentication middleware not applied yet!!!");
    next();
};

// middleware
app.use(morgan("dev"));
app.use(myFancyAuthentication);
app.use(expressValidator());
app.use(bodyParser.json());

// use instead of get, we use postRoutes from ./routes/post as middleware
app.use("/", postRoutes)

port = process.env.PORT

app.listen(port, () => {
    console.log(`A Node Js API is listeninig on port ${port}`)
});


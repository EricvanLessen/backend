const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minlength: 4,
        maylength: 150
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 4,
        maylength: 2000
    }
});

module.exports = mongoose.model("Post", postSchema);
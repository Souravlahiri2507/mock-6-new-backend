const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    username:String,
    title:String,
    content:String,
    category:String,
    date:String,
})

const BlogModel = mongoose.model("post", BlogSchema);

module.exports = {BlogModel};
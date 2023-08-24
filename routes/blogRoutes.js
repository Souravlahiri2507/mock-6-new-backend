const express = require("express");
const { BlogModel } = require("../model/blogModel");

const blogRouter = express.Router();

//get
blogRouter.get("/", async (req, res) => {
  const { userID } = req.body;
  try {
    const blogs = await BlogModel.find({ userID });
    res.status(200).send(blogs);
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

//post
blogRouter.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    const blog = new PostModel(payload);
    await blog.save();
    res.status(200).send({ msg: "A new blog has been posted" });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

//Edit
blogRouter.patch("/blogs/:userID", async (req, res) => {
  let { userID } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: userID });
    res.status(200).send({ msg: `blog ${userID} has been updated` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

//Delete
blogRouter.delete("/blogs/:userID", async (req, res) => {
  let { userID } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: userID });
    res.status(200).send({ msg: `blog ${userID} has been delete` });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

module.exports = { blogRouter };

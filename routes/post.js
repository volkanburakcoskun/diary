var express = require("express");
var router = express.Router();
var Post = require("../models/diary");
var User = require("../models/user");
const passport = require("passport");
const validatePostInput = require("../validation/post");
// @route   GET api/v1/post/
// @desc    Get All Posts
// @access  Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});
// @route   GET api/v1/post/:id
// @desc    Get Post By Id
// @access  Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: "No Post Found" }));
});
// @route   POST api/v1/post/
// @desc    Add New Post
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    newPost = new Post({
      author: req.body.author,
      body: req.body.text
    });
    newPost.save().then(post => {
      res.json(post);
    });
  }
);
// @route   DELETE api/v1/post/:id
// @desc    Delete Post
// @access  Private
router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => post.remove())
    .then(res.json({ success: true }));
});

module.exports = router;

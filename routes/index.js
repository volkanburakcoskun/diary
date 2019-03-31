var express = require("express");
var router = express.Router();
var BlogPost = require("../models/diary");
/* GET home page. */
router.get("/asdasd", function(req, res, next) {
  var post = new BlogPost({
    title: "String",
    body: "String"
  });
  post.save(function(err) {
    if (!err) console.log("Success!");
  });
});
router.get("/", function(req, res, next) {
  res.render("index", { title: "Diary", user: req.user });
});
module.exports = router;

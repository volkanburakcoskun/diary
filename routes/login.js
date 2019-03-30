var express = require("express");
var router = express.Router();
var BlogPost = require("../models/diary");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("login", { title: "Login Page" });
});
router.post("/", passport.authenticate("local"), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.redirect("/users/" + req.user.username);
});
module.exports = router;

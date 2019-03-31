var express = require("express");
var router = express.Router();
var BlogPost = require("../models/diary");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("dashboard", { user: req.user, title: "Dashboard" });
});

module.exports = router;

var express = require("express");
var router = express.Router();
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/login", function(req, res, next) {
  res.render("login", { title: "Login Page" });
});

router.get("/register", function(req, res, next) {
  res.render("register", { title: "Login Page" });
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/api/v1/users/register"
  })
);
passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ username: userName }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);
module.exports = router;

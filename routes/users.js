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
  passport.authenticate("local", { failureRedirect: "/error" }),
  function(req, res) {
    res.render("createPost", { title: "T", user: req.user });
  }
);

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne(
      {
        username: username
      },
      function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      }
    );
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
module.exports = router;

var express = require("express");
var router = express.Router();
const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const validateLoginInput = require("../validation/login");

// @route   POST api/v1/post/
// @desc    Login
// @access  Public
router.post("/login", (req, res) => {
  console.log(req.body);
  const { errors, isValid } = validateLoginInput(req.body);
});

// @route   GET api/v1/post/
// @desc    Get All Users
// @access  Private

router.get("/", (req, res) => {
  User.find({})
    .then(users => res.json(users))
    .catch(error => res.json({ usernotfound: "No user found" }));
});

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

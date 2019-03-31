var express = require("express");
var router = express.Router();
const User = require("../models/user");
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");
const jwt = require("jsonwebtoken");
const keys = require("../helpers/keys");
const bcrypt = require("bcryptjs");
// @route   POST api/v1/post/
// @desc    Login
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username }).then(user => {
    // Check for user
    if (!user) {
      errors.username = "User not found";
      return res.status(404).json(errors);
    }
    const payload = { id: user.id, name: user.name }; // Create JWT Payload
    // Sign Token
    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
      res.json({
        success: true,
        token: "Bearer " + token
      });
    });
  });
});

// @route   GET api/v1/post/
// @desc    Get All Users
// @access  Private

router.get("/", (req, res) => {
  User.find({})
    .then(users => res.json(users))
    .catch(error => res.json({ usernotfound: "No user found" }));
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      errors.username = "Username already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;

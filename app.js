var express = require("express");
var path = require("path");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var keys = require("./helpers/keys");

var usersRouter = require("./routes/users");
var postRouter = require("./routes/post");
var app = express();
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./helpers/passport")(passport);

app.use(cors());
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/posts", postRouter);

module.exports = app;

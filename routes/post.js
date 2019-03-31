var express = require("express");
var router = express.Router();

router.post("/create", (req, res) => {
  console.log(req.body.text);
});
router.get("/create", (req, res) => {
  console.log(req.user);
});

module.exports = router;

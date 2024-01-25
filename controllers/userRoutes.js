const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("welcome to user test api");
});

module.exports = router;

const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../html/home.html"));
});

router.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "../html/survey.html"));
});

//defaults to home if page not found
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../html/home.html"));
});

module.exports = router;

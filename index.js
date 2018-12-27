const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");
const friends = require("./data/friends");
const findMatch = require("./calc");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(favicon(path.join(__dirname, "favicon.ico")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friends", (req, res) => {
  res.json(friends);
});

//defaults to home if page not found
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.post("/api/friends", (req, res) => {
  const newFriend = req.body;
  res.send(findMatch(newFriend, friends));
  friends.push(newFriend);
});

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});

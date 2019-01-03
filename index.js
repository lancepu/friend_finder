const express = require("express");
const app = express();
const path = require("path");
const favicon = require("serve-favicon");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/static")));
app.use(favicon(path.join(__dirname, "favicon.ico")));
app.use("/api/friends", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});

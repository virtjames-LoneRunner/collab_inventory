const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/about.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

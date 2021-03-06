const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/register.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

require("dotenv").config();
const express = require("express");
const app = express();

app.listen(5000, (req, res) => {
  console.log("server working on 5000 port");
});

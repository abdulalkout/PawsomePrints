require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Animals = require("./models/animals");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(methodOverride("_method"));

app.use((req, res, next) => {
  next();
});

app.get("/allanimals", (req, res) => {
  Animals.find({}, (err, allAnimals) => {
    res.json({ animals: allAnimals });
  });
});

app.listen(5000, (req, res) => {
  console.log("server working on 5000 port");
});

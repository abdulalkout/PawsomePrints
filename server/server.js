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

app.get("/animals/seed", (req, res) => {
  Animals.create(
    [
      {
        name: "Platypus",
        description: "via Wikipedia: The platypus, sometimes referred to as the duck-billed platypus, is a semiaquatic, egg-laying mammal endemic to eastern Australia, including Tasmania.",
        donation: 0,
        story: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOitznFVLt2AwqaDo_sSftxvC3ts9z7pOpqg&usqp=CAU",
        health: "Healthy"
      },
      {
        name: "Polar Bear",
        description: "via Wikipedia: The polar bear is a large bear native to the Arctic and nearby areas.",
        donation: 0,
        story: "",
        img: "https://bloximages.newyork1.vip.townnews.com/valpotorch.com/content/tncms/assets/v3/editorial/3/4b/34b39260-c783-11ec-9097-f3d860fdf9c7/626b82e91b1c1.image.jpg?resize=1200%2C755",
        health: "Healthy"
      },
      {
        name: "Snow Leopard",
        description: "via Wikipedia: The snow leopard, commonly known as the ounce, is a species of large cat native to the mountain ranges of Central and South Asia.",
        donation: 0,
        story: "",
        img: "https://s3.animalia.bio/animals/photos/full/1.25x1/snow-leopard-sitting-on-rocks-15842963161jpg.webp",
        health: "Healthy"
      }
    ],
    (err, data) => {
      res.redirect("/fruits");
    }
  );
});

app.listen(5000, (req, res) => {
  console.log("server working on 5000 port");
});

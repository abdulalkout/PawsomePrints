const mongoose = require("mongoose");

const animalsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  discription: { type: String, required: true },
  Donation: { type: Number, required: false },
  story: { type: String, required: false },
  img: { type: String, required: false },
  helth: { type: String, required: false },
});

const Animals = mongoose.model("animals", animalsSchema);
module.exports = Animals;

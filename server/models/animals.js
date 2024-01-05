const mongoose = require("mongoose");

const animalsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  donation: { type: Number, required: false },
  story: { type: String, required: false },
  img: { type: String, required: false },
  health: { type: String, required: false },
});

const Animals = mongoose.model("animals", animalsSchema);
module.exports = Animals;

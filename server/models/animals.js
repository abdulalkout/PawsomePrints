const mongoose = require("mongoose");

const animalsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  discription: { type: String, required: true },
  code: { type: String, required: false },
  links: { type: Array, required: false },
  img: { type: String, required: false },
});

const Animals = mongoose.model("Animals", animalsSchema);
module.exports = Animals;

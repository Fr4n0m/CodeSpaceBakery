const mongoose = require("mongoose");

const donutSchema = new mongoose.Schema({
  imageUrl: String,
  id: Number,
  name: String,
  flavor: String,
  price: Number,
});

const Donut = mongoose.model("Donut", donutSchema);

module.exports = Donut;

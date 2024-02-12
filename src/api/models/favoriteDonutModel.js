const mongoose = require("mongoose");

const favoriteDonutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  flavor: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const FavoriteDonut = mongoose.model("FavoriteDonut", favoriteDonutSchema);

module.exports = FavoriteDonut;

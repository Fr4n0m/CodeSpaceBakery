const Donut = require("../models/donutModel.js");
const mongoose = require("mongoose");
const FavoriteDonut = require("../models/favoriteDonutModel");

const addToFavorites = async (req, res) => {
  try {
    const id = req.params.id;
    const donut = await Donut.findById(id);

    if (!donut) {
      return res.status(404).send("El donut no existe 😢");
    }

    const favoriteDonut = new FavoriteDonut({
      name: donut.name,
      imageUrl: donut.imageUrl,
      flavor: donut.flavor,
      price: donut.price,
    });
    await favoriteDonut.save();

    res.status(200).json({
      status: "succeeded",
      message: "Donut agregado a favoritos",
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

const removeFromFavorites = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res
      .status(400)
      .json({ message: "No se proporcionó el ID del Donut." });
  }

  try {
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

    if (!isValidObjectId) {
      throw new Error("ID de Donut no válido.");
    }

    const objectId = new mongoose.Types.ObjectId(id);

    const deletedDonut = await FavoriteDonut.findOneAndDelete({
      _id: objectId,
    });

    if (!deletedDonut) {
      return res.status(404).json({ message: "No se encontró el donut." });
    }

    return res
      .status(200)
      .json({ message: `Donut con id: { ${id} } eliminado con éxito.` });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

const getFavorites = async (req, res) => {
  try {
    const data = await FavoriteDonut.find();

    res.status(200).json({ status: "succeeded", data: data, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

module.exports = { addToFavorites, removeFromFavorites, getFavorites };

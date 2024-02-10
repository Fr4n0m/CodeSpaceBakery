const mongoose = require("mongoose");
const Donut = require("../models/donutModel.js");

//obtener todos los donuts
const getDonuts = async (req, res) => {
  try {
    const data = await Donut.find();
    res.status(200).json({ status: "succeeded", data, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

//obtener donut por id
const getDonutbyId = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Donut.findById(id);
    res.status(200).json({ status: "succeeded", user, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

//editar donut
const patchDonutById = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, imageUrl, flavor, price } = req.body;
    const user = await userModel.findById(id);

    if (!Donut) {
      return res.status(404).send("El donut no existe 😢");
    }

    if (name) {
      Donut.name = req.body.name;
    }

    if (imageUrl) {
      Donut.imageUrl = req.body.name;
    }

    if (flavor) {
      Donut.flavor = req.body.flavor;
    }

    if (price) {
      Donut.price = req.body.price;
    }

    await Donut.save();
    res.status(200).json({ status: "succeeded", user, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

//añadir Donut
const addDonut = async (req, res) => {
  try {
    const { name, imageUrl, flavor, price } = req.body;

    const newDonut = new Donut({
      name,
      imageUrl,
      flavor,
      price,
    });

    await newDonut.save();
    res.status(201).json({ status: "succeeded", newUser, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

//eliminar Donut
const deleteDonut = async (req, res) => {
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

    const objectId = mongoose.Types.ObjectId(id);

    const deletedUser = await Donut.findOneAndDelete({ _id: objectId });

    if (!deletedUser) {
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

module.exports = {
  getDonuts,
  getDonutbyId,
  patchDonutById,
  deleteDonut,
  addDonut,
};

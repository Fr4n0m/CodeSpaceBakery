const {
  getDonuts,
  getDonutById,
  patchDonutById,
  deleteDonut,
  addDonut,
} = require("../controllers/donutController.js");

const router = require("express").Router();

//obtener todos los donuts
router.get("/", getDonuts);

//obtener un donut por id
router.get("/:id", getDonutById);

//agregar un nuevo donut
router.post("/", addDonut);

//eliminar un donut
router.delete("/:id", deleteDonut);

//editar un donut
router.patch("/:id", patchDonutById);

module.exports = router;

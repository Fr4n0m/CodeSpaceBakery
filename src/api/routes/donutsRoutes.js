const {
  getDonuts,
  getDonutById,
  patchDonutById,
  deleteDonut,
  addDonut,
} = require("../controllers/donutController.js");
const {
  addToFavorites,
  removeFromFavorites,
} = require("../controllers/favoritesController.js");

const router = require("express").Router();

router.get("/", getDonuts);

router.get("/:id", getDonutById);

router.post("/", addDonut);

router.delete("/:id", deleteDonut);

router.patch("/:id", patchDonutById);

router.post("/:id/favorites", addToFavorites);

router.delete("/:id/favorites", removeFromFavorites);

module.exports = router;

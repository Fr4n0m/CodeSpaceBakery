const express = require("express");
const app = express;
const db = require("../config/db.js");
const donutRoutes = require("../api/routes/donutsRoutes.js");

require("dotenv").config();

app.use(express.json());

app.use("/api", donutRoutes);

const PORT = process.env.PORT || 3000;

db.on("error", (error) => {
  console.log(`Error al conectarnos a MongoDB: ${error}`);
});

db.on("connected", () => {
  console.log("Se ha establecido una conexión exitosa a MongoDB.");
});

db.on("disconnected", () => {
  console.log("La conexión a MongoDB se cerró correctamente.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 4000;
const donutRouter = require("../api/routes/donutsRoutes.js");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

require("dotenv").config();

const mongo_URL = process.env.DATABASE_URL_DEV;
mongoose.connect(mongo_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`Error al conectarnos a MongoDB: ${error}`);
});

db.on("connected", () => {
  console.log("Se ha establecido una conexión exitosa a MongoDB.");
});

db.on("disconnected", () => {
  console.log("La conexión a MongoDB se cerró correctamente.");
});

app.use("/donuts", donutRouter);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

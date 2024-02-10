const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Error conecting with MongoDb: ", err.message);
  });

module.exports = mongoose.connection;

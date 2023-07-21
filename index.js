const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes/api");

require("dotenv").config();

const PORT = process.env.PORT || 8000;
const apiUrl = process.env.API_BASE_URL;
const app = express();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(`/${apiUrl}`, routes);
app.use(`/${apiUrl}`, (req, res) =>
  res.status(404).json({
    ok: false,
    code: 404,
    message: "Not found",
  })
);

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT}`);
});

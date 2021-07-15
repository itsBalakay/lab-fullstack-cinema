const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Movie = require("./models/Movie");
const movies = require("./bin/seeds");

mongoose
  .connect("mongodb://localhost:27017/movies-lab", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async (self) => {
    console.log("is this working");
    await Movie.deleteMany();
    await Movie.insertMany(movies);
  })
  .catch((error) => {
    console.error("error connecting to the database", error);
  });

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/", require("./routes"));

app.listen(process.env.PORT || 5000);

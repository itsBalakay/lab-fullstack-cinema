const express = require("express");
const router = express.Router();
const Movie = require("./models/Movie");

router.get("/getAllTheMoviesFromTheServer", (req, res) => {
  Movie.find().then((movies) => {
    res.json(movies);
  });
});

module.exports = router;

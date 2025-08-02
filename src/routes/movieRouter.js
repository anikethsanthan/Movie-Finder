const getMoviesFromTMDB = require("../controllers/movies/getMoviesFromTMDB");

// const { authenticate } = require("../middleware/authenticate");

const movieRouter = require("express").Router();

movieRouter.get("/getMoviesFromTMDB", getMoviesFromTMDB);

module.exports = movieRouter;

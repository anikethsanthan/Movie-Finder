const Movie = require("../../models/movie");

const getMovies = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    const movies = await Movie.find()
      .skip(skip)
      .limit(Number(limit))
      .sort({ releaseDate: -1 }); // Sorted movies by release date

    const totalMovies = await Movie.countDocuments();
    const totalPages = Math.ceil(totalMovies / limit);

    res.status(200).json({
      movies,
      page: Number(page),
      limit: Number(limit),
      totalMovies,
      totalPages,
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = getMovies;

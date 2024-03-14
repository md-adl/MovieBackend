const Movie = require('../Models/movie');

// CRUD operations for Movie
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createMovie = async (req, res) => {
  const { name, releaseDate } = req.body;

  try {
    const movie = new Movie({ name, releaseDate });
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    await Movie.findByIdAndDelete(id);
    // Also delete associated reviews
    // ...

    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Other CRUD operations for Movie
// ...

module.exports = {
  getAllMovies,
  createMovie,
  deleteMovie,
  // Other CRUD operations for Movie
  // ...
};

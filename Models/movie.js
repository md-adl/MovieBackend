const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: String,
  releaseDate: Date,
  averageRating: { type: Number, default: null },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

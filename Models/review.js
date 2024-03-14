const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: mongoose.Schema.Types.ObjectId,
  reviewerName: { type: String, default: null },
  rating: Number,
  reviewComments: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

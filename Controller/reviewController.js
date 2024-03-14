const Review = require('../Models/review');

// CRUD operations for Review
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createReview = async (req, res) => {
  const { movieId, reviewerName, rating, reviewComments } = req.body;

  try {
    const review = new Review({ movieId, reviewerName, rating, reviewComments });
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  getAllReviews,
  createReview,
};

require('dotenv').config(); // Load environment variables from .env file
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log("Connected to the database");
}).catch((error) => {
  console.error("Error connecting to the database:", error);
});

const movieRoutes = require('./Router/movieRoutes');
const reviewRoutes = require('./Router/reviewRoutes');
app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

const PORT = process.env.PORT || 5001; // Use environment variable for port, fallback to 5001 if not provided
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

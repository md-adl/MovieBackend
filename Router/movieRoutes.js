const express = require('express');
const router = express.Router();
const movieController = require('../Controller/movieController')

router.get('/', movieController.getAllMovies);
router.post('/', movieController.createMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;

const express = require('express');
const router = express.Router();
const { addMovie, getMovies } = require('../controllers/movieController');
const { isAdmin } = require('../middlewares/authMiddleware');

router.post('/add', isAdmin, addMovie);
router.get('/', getMovies);

module.exports = router;

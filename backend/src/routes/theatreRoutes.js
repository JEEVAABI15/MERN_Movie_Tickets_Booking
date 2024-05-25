const express = require('express');
const router = express.Router();
const { addTheatre } = require('../controllers/theatreController');
const { isAdmin } = require('../middlewares/authMiddleware');

router.post('/add', isAdmin, addTheatre);

module.exports = router;

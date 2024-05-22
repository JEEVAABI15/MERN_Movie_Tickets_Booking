const express = require('express');
const router = express.Router();
const { bookTickets, viewBookings } = require('../controllers/bookingController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');

router.post('/book', isAuthenticated, bookTickets);
router.get('/view', isAuthenticated, isAdmin, viewBookings);

module.exports = router;

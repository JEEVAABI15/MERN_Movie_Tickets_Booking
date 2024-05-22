const Booking = require('../models/bookingModel');
const Movie = require('../models/movieModel');
const Theatre = require('../models/theatreModel');

exports.bookTickets = async (req, res) => {
  const { userId, movieId, theatreId, bookingDate, numberOfSeats } = req.body;
  try {
    const theatre = await Theatre.findById(theatreId);
    const currentBookings = await Booking.find({ movieId, theatreId, bookingDate });
    const bookedSeats = currentBookings.reduce((acc, booking) => acc + booking.numberOfSeats, 0);

    if (bookedSeats + numberOfSeats > theatre.seatingCapacity) {
      return res.status(400).json({ msg: 'Not enough seats available' });
    }

    const booking = new Booking({ userId, movieId, theatreId, bookingDate, numberOfSeats });
    await booking.save();
    res.json(booking);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.viewBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId movieId theatreId');
    res.json(bookings);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

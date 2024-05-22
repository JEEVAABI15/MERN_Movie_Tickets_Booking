const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  movieId: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Movie', 
    required: true 
},
  theatreId: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Theatre', 
    required: true 
},
  bookingDate: 
  { 
    type: Date, 
    required: true 
},
  numberOfSeats: 
  { 
    type: Number, 
    required: true 
},
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;

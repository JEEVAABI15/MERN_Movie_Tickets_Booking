const Theatre = require('../models/theatreModel');

exports.addTheatre = async (req, res) => {
  const { name, location, seatingCapacity } = req.body;
  try {
    const theatre = new Theatre({ name, location, seatingCapacity });
    await theatre.save();
    res.json(theatre);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

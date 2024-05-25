const Movie = require('../models/movieModel');

exports.addMovie = async (req, res) => {
  const { 
    title, 
    description, 
    releaseDate, 
    duration, 
    genre, 
    theatreId 
} = req.body;

  try {
    const movie = new Movie({ title, description, releaseDate, duration, genre, theatreId });
    await movie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getMovies = async (req, res) => {
  const { title, date, theatreName } = req.query;
  let query = {};
  if (title) query.title = new RegExp(title, 'i');
  if (date) query.releaseDate = new Date(date);
  if (theatreName) query.theatreName = new RegExp(theatreName, 'i');
  try {
    const movies = await Movie.find(query).populate('theatreId');
    res.json(movies);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: 
    { 
        type: String, 
        required: true, 
        unique: true 
    },
    description: 
    { 
        type: String, 
        required: true 
    },
    releaseDate: 
    { 
        type: Date, 
        required: true 
    },
    duration: 
    { 
        type: Number, 
        required: true 
    },
    genre: 
    { 
        type: String, 
        required: true 
    },
    theatreId: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Theatre', 
        required: true },
}, 
{ 
    timestamps: true 
});

module.exports = mongoose.model('Movie', movieSchema);

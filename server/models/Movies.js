// server/models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    poster: {
        type: String,  // URL to the image
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    reviews: [
        {
            reviewer: String,
            comment: String,
            rating: Number,
        },
    ],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

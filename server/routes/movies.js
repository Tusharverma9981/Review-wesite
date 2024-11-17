// server/routes/movies.js
const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
});

// Add a movie review
router.post('/review/:id', async (req, res) => {
    const { reviewer, comment, rating } = req.body;
    try {
        const movie = await Movie.findById(req.params.id);
        movie.reviews.push({ reviewer, comment, rating });
        await movie.save();
        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add review' });
    }
});

// Search movies by title
router.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const movies = await Movie.find({ title: { $regex: query, $options: 'i' } });
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: 'Failed to search movies' });
    }
});

module.exports = router;

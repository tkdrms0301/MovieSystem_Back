const express = require('express');
const router = express.Router();
const { Movie } = require('../models/movie');

router.post('/movie', async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    return res.send({ movie });
});

//전체 영화 가져오기
router.get('/movieGet', async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.send(movies);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

router.get('/movieSortGet', async (req, res) => {
    try {
        sort = req.query.sort;
        if (sort === 'reservationRate') {
            const movies = await Movie.find({}).sort({ averageGrade: -1 });
            res.send(movies);
        } else if (sort === 'orderRate') {
            const movies = await Movie.find({}).sort({ ticketingRate: -1 });
            res.send(movies);
        } else {
            const movies = Movie;
            res.send(movies);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

//평균평점순
router.get('/movieAverageGradeGet', async (req, res) => {
    try {
        const movies = await Movie.find({}).sort({ averageGrade: -1 });
        res.send(movies);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});
//예매율순
router.get('/movieTicketingRateGet', async (req, res) => {
    try {
        const movies = await Movie.find({}).sort({ ticketingRate: -1 });
        res.send(movies);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

module.exports = router;

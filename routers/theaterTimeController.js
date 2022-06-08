const express = require('express');
const router = express.Router();
const { TheaterTime } = require('../models/theaterTime');

router.get('/theaterTime', async (req, res) => {
    try {
        const theaterTime = await TheaterTime.find({})
            .populate({ path: 'theater' })
            .populate({ path: 'movie' });
        res.send(theaterTime);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

module.exports = router;

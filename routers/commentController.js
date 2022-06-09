const express = require('express');
const router = express.Router();
const { Comment } = require('../models/comment');

router.get('/comment', async (req, res) => {
    try {
        const comment = await Comment.find({})
            .populate({ path: 'member' })
            .populate({ path: 'movie' });
        res.send(comment);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

router.post('/commentPost', async (req, res) => {
    try {
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router({ mergeParams: true });
const { Comment } = require('../models/comment');
const { Movie } = require('../models/movie');
const { Member } = require('../models/member');
const { isValidObjectId } = require('mongoose');

router.get('/', async (req, res) => {
    try {
        const movie = req.params;

        const comment = await Comment.find(movie)
            .populate({ path: 'member' })
            .populate({ path: 'movie' });

        res.send(comment);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        var { movie } = req.params;
        const { contents, memberId, grade } = req.body;
        if (!isValidObjectId(movie)) return res.status(400).send({ error: 'movieId is invalid' });
        if (!isValidObjectId(memberId))
            return res.status(400).send({ error: 'memberId is invalid' });
        var movie = await Movie.findById(movie);
        const member = await Member.findById(memberId);
        const recommand = 0;

        if (!movie || !member)
            return res.status(400).send({ error: 'movie or member does not exist' });
        const comment = new Comment({ contents, recommand, grade, movie, member });
        await comment.save();
        return res.send({ comment });
    } catch (error) {
        return res.status(400).send({ error: error.message });
    }
});

router.put('/:commentId', async (req, res) => {
    try {
        const { commentId } = req.params;
        console.log(commentId);
        const { content, grade } = req.body;
        if (!isValidObjectId(commentId))
            return res.status(400).send({ error: 'commentId is invalid' });
        const comment = await Comment.findByIdAndUpdate(commentId, {
            contents: content,
            grade: grade,
        });
        return res.send(comment);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});
router.put('/:commentId/recommand', async (req, res) => {
    try {
        const { commentId } = req.params;
        const { recommand } = req.body;
        if (!isValidObjectId(commentId))
            return res.status(400).send({ error: 'commentId is invalid' });
        const comment = await Comment.findByIdAndUpdate(commentId, {
            recommand: recommand,
        });
        return res.send(comment);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

module.exports = router;

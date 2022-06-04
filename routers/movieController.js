const express = require("express");
const router = express.Router();
const { Movie } = require("../models/movie");

router.post("/movie", async(req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    return res.send({ movie });
});

router.get("/movieGet", async(req, res) => {
    try{
        const movies = await Movie.find({});
        res.send(movies);
    }catch(err){
        console.log(err);
        res.status(500).send({ err : err.message });
    }
});

module.exports = router;
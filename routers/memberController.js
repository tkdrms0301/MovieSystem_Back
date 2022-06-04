const express = require("express");
const router = express.Router();
const { Member } = require("../models/member");

router.post("/member", async(req, res) => {
    const member = new Member(req.body);
    await member.save();
    return res.send({ member });
});

module.exports = router;
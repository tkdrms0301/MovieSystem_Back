const express = require("express");
const router = express.Router();
const { Member } = require("../models/member");

router.post("/member", async(req, res) => {
    const member = new Member(req.body);
    await member.save();
    return res.send({ member });
});

router.get("/memberGet", async(req, res) => {
    try{
        const members = await Member.find({});
        res.send(members);
    }catch(err){
        console.log(err);
        res.status(500).send({ err : err.message });
    }
});

module.exports = router;
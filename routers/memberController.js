const express = require('express');
const router = express.Router();
const { Member } = require('../models/member');

// login
router.post('/login/member', async (req, res) => {
    try {
        const { id, password } = req.body;
        const members = await Member.findOne({ id: id, password: password }).exec();
        if (!members) return res.status(401).send();
        //redirect 추가
        else return res.status(302).send(members);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

//sign up
router.post('/sign/member', async (req, res) => {
    try {
        const members = new Member(req.body);
        if (await Member.findOne({ id: members.id })) return res.status(400).send();

        await members.save();
        return res.send({ members });
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});

/*
router.post('/member', async (req, res) => {
    const member = new Member(req.body);
    await member.save();
    return res.send({ member });
});

router.get('/memberGet', async (req, res) => {
    try {
        const members = await Member.find({});
        res.send(members);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: err.message });
    }
});
*/
module.exports = router;

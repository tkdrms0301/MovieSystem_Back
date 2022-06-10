const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
const RcommandSchema = new Schema({
    // 영화 id
    movie: { type: Types.ObjectId, required: true, ref: 'Movie' },

    comment: { type: Types.ObjectId, required: true, ref: 'Comment' },
    // 회원 id
    member: { type: Types.ObjectId, required: true, ref: 'Member' },

    done: { type: Boolean, default: false },
});

const Recommand = mongoose.model('Recommand', RcommandSchema);
module.exports = { Recommand };

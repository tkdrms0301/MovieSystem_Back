const mongoose = require('mongoose');
const { Schema } = mongoose;
const CommentSchema = new Schema({
    cotents: { type: String },
    recommand: { type: Number },
    grade: { type: Number },
    // 영화 id
    // 회원 id
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = { Comment };

const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketingTimeSchema = new Schema({
    time: { type: String, required: true },
    // 상영관(theater) id
    // 영화 id
});
const TicketingSeat = mongoose.model('TicketingSeat', TicketingSeatSchema);
module.exports = { TicketingSeat };

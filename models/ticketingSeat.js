const mongoose = require('mongoose');
const { Schema } = mongoose;

const TicketingSeatSchema = new Schema({
    seatNumber: { type: String, required: true },
    // 상영관(theater) id
});
const TicketingSeat = mongoose.model('TicketingSeat', TicketingSeatSchema);
module.exports = { TicketingSeat };
